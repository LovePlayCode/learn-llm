import { useMemo, useState } from 'react';
import { Alert, Button, Calendar, Card, Chip, Tabs } from '@heroui/react';
import { parseDate, type DateValue } from '@internationalized/date';
import { Books, Flame, GraduationCap, FileText, SparklesFill, BookOpen, CircleCheck, CalendarXmark, TargetDart, Rocket, CheckShapeFill } from '@gravity-ui/icons';
import './App.css';
import ReviewPageViewer from './components/ReviewPageViewer';
import { getReviewPageBySource, reviewPages } from './data/reviewPages';
import { reviewRecords, reviewTasks, today, type ReviewRecord, type ReviewTask } from './data/summaries';

function computeStreakStats() {
  const allDates = new Set([
    ...reviewRecords.map(r => r.date),
    ...reviewTasks.filter(t => t.completed).map(t => t.dueDate),
  ])
  const totalDays = allDates.size
  const graduated = reviewTasks.filter(t => t.stage === 'D7' && t.completed).length
  const inProgress = new Set(reviewTasks.filter(t => !t.completed).map(t => t.title)).size

  // Compute streak: consecutive days ending at today
  let streak = 0
  const d = new Date(`${today}T08:00:00`)
  while (true) {
    const key = [
      d.getFullYear(),
      String(d.getMonth() + 1).padStart(2, '0'),
      String(d.getDate()).padStart(2, '0'),
    ].join('-')
    if (allDates.has(key)) {
      streak++
      d.setDate(d.getDate() - 1)
    } else {
      break
    }
  }

  return { totalDays, streak, graduated, inProgress }
}

function formatDate(date: string) {
  const d = new Date(`${date}T08:00:00`);
  return new Intl.DateTimeFormat('zh-CN', {
    month: 'long',
    day: 'numeric',
  }).format(d) + ' · ' + new Intl.DateTimeFormat('zh-CN', {
    weekday: 'long',
  }).format(d);
}

function renderCalendarHeaderDate(dateStr: string) {
  const d = new Date(`${dateStr}T08:00:00`);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const weekday = new Intl.DateTimeFormat('zh-CN', { weekday: 'short' }).format(d);
  
  return (
    <>
      <div className="calendar-widget-top">{weekday}</div>
      <div className="calendar-widget-body">
        <span className="calendar-widget-day">{day}</span>
        <span className="calendar-widget-month">{month}月</span>
      </div>
    </>
  );
}

function taskLabel(type: ReviewTask['type']) {
  return {
    rest: '整合',
    due: '到期',
    scheduled: '计划',
  }[type]
}

function taskColor(type: ReviewTask['type']) {
  return {
    rest: 'accent',
    due: 'success',
    scheduled: 'default',
  }[type] as 'accent' | 'success' | 'default'
}

function isLearningRecord(record: ReviewRecord) {
  return record.sourceFile.startsWith('learn/')
}

function recordTypeLabel(record: ReviewRecord) {
  return isLearningRecord(record) ? '学习' : '复习'
}

function dateValueToKey(date: DateValue) {
  return date.toString()
}

function App() {
  const [selectedDate, setSelectedDate] = useState(today)
  const [selectedPageId, setSelectedPageId] = useState<string | null>(null)
  const [focusedCalendarDate, setFocusedCalendarDate] = useState<DateValue>(parseDate(today))

  const recordDates = useMemo(() => new Set(reviewRecords.map((record) => record.date)), [])
  const taskDates = useMemo(() => new Set(reviewTasks.map((task) => task.dueDate)), [])
  const selectedCalendarDate = useMemo(() => parseDate(selectedDate), [selectedDate])
  const streakStats = useMemo(computeStreakStats, [])

  const selectedRecords = reviewRecords.filter((record) => record.date === selectedDate)
  const selectedLearningRecords = selectedRecords.filter(isLearningRecord)
  const selectedReviewRecords = selectedRecords.filter((record) => !isLearningRecord(record))
  const selectedTasks = reviewTasks.filter((task) => task.dueDate === selectedDate)
  const selectedPage = reviewPages.find((page) => page.id === selectedPageId) ?? null
  const todayTasks = reviewTasks.filter((task) => task.dueDate === today)
  const allTodayCompleted = todayTasks.length > 0 && todayTasks.every(t => t.completed)
  const isViewingOtherDate = selectedDate !== today

  // Smart default tab: pick first tab with content
  const smartDefaultTab = useMemo(() => {
    if (selectedLearningRecords.length > 0) return 'learning'
    if (selectedReviewRecords.length > 0) return 'review'
    if (selectedTasks.length > 0) return 'tasks'
    return 'learning'
  }, [selectedLearningRecords.length, selectedReviewRecords.length, selectedTasks.length])

  if (selectedPage) {
    return <ReviewPageViewer page={selectedPage} onBack={() => setSelectedPageId(null)} />
  }

  function selectDate(date: string) {
    setSelectedDate(date)
    setFocusedCalendarDate(parseDate(date))
  }

  function openTask(task: ReviewTask) {
    setSelectedDate(task.dueDate)
    setFocusedCalendarDate(parseDate(task.dueDate))
  }

  return (
    <main className="review-app">
      <header className="home-hero">
        <div>
          <span className="eyebrow">Learning Workbench</span>
          <h1>专注今日任务，回溯每日成长。</h1>
          <p>这里只展示你今天需要完成的复习目标，帮你保持专注。点击日历中的日期，即可回看当天的学习与复习详情。</p>
          <div className="streak-stats">
            <span className="streak-stat"><Books className="streak-icon" /> 已学习 {streakStats.totalDays} 天</span>
            {streakStats.streak > 0 && <span className="streak-stat"><Flame className="streak-icon fire" /> 连续 {streakStats.streak} 天</span>}
            {streakStats.graduated > 0 && <span className="streak-stat"><GraduationCap className="streak-icon grad" /> {streakStats.graduated} 项已毕业</span>}
            {streakStats.inProgress > 0 && <span className="streak-stat"><FileText className="streak-icon edit" /> {streakStats.inProgress} 项进行中</span>}
          </div>
        </div>
        <button
          className={`calendar-widget-card ${isViewingOtherDate ? 'clickable' : ''}`}
          onClick={() => {
            if (isViewingOtherDate) {
              setSelectedDate(today)
              setFocusedCalendarDate(parseDate(today))
            }
          }}
          title={isViewingOtherDate ? '回到今天' : '今天'}
          aria-label={isViewingOtherDate ? '回到今天' : '今天'}
        >
          {renderCalendarHeaderDate(today)}
        </button>
      </header>

      <section className="workbench-grid">
        {/* Column 1: Today's Goal */}
        <div className="workbench-col">
          <Card className="panel today-panel" variant="default">
            <Card.Header>
              <div>
                <span className="eyebrow">Today</span>
                <Card.Title>今日复习目标</Card.Title>
                <Card.Description>先完成今天该做的，其他内容交给日历。</Card.Description>
              </div>
            </Card.Header>
            <Card.Content>
              <div className="today-task-list">
                {allTodayCompleted ? (
                  <div className="celebration-state">
                    <Alert status="success" className="celebration-alert">
                      <Alert.Indicator>
                        <SparklesFill className="celebration-icon" />
                      </Alert.Indicator>
                      <Alert.Content>
                        <Alert.Title>今天的复习已全部完成！</Alert.Title>
                        <Alert.Description>
                          干得漂亮。可以在日历中回看过去的记录，或者休息一下。
                        </Alert.Description>
                      </Alert.Content>
                    </Alert>
                    {todayTasks.map((task) => {
                      const relatedRecord = reviewRecords.find(r => r.id === task.relatedRecordId);
                      const page = relatedRecord ? getReviewPageBySource(relatedRecord.sourceFile) : null;
                      return (
                        <Card className="completed-task-mini" key={task.id} variant="transparent">
                          <div className="completed-task-mini-inner justify-between">
                            <div className="flex items-center gap-2">
                              <CheckShapeFill className="completed-task-icon" />
                              <span>{task.title}</span>
                            </div>
                            {relatedRecord && page && (
                              <Button
                                size="sm"
                                variant="ghost"
                                className="px-2 min-w-0"
                                onClick={() => setSelectedPageId(page.id)}
                              >
                                <BookOpen className="w-4 h-4" />
                                依据
                              </Button>
                            )}
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                ) : todayTasks.length > 0 ? (
                  todayTasks.map((task) => {
                    const relatedRecord = reviewRecords.find(r => r.id === task.relatedRecordId);
                    const page = relatedRecord ? getReviewPageBySource(relatedRecord.sourceFile) : null;
                    return (
                      <Card
                        className={`task-card-premium ${task.completed ? 'completed' : ''}`}
                        key={task.id}
                        variant={task.completed ? 'transparent' : 'default'}
                        onClick={() => openTask(task)}
                        role="button"
                        tabIndex={0}
                      >
                        <Card.Header className="pb-1">
                          <div className="flex w-full items-center justify-between gap-2 mb-1">
                            <TaskBadge type={task.type} completed={task.completed} />
                            <span className="task-stage-meta">{task.stage} · {task.estimate}</span>
                          </div>
                          <Card.Title>{task.title}</Card.Title>
                        </Card.Header>
                        <Card.Content className="py-1">
                          <Card.Description className="task-desc">{task.description}</Card.Description>
                        </Card.Content>
                        {relatedRecord && page && (
                          <Card.Footer className="pt-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="w-full justify-center review-basis-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPageId(page.id);
                              }}
                            >
                              <BookOpen className="w-4 h-4 mr-1.5" />
                              复习依据：{relatedRecord.title}
                            </Button>
                          </Card.Footer>
                        )}
                      </Card>
                    );
                  })
                ) : (
                  <div className="quiet-empty">
                    <strong>今天没有到期复习。</strong>
                    <span>可以整理笔记，或者从日历里回看过去某一天。</span>
                  </div>
                )}
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Column 2: Calendar */}
        <div className="workbench-col">
          <Card className="panel calendar-panel" variant="default">
            <Card.Header>
              <div className="calendar-head">
                <div>
                  <span className="eyebrow">Calendar</span>
                  <Card.Title>学习日历</Card.Title>
                  <Card.Description>蓝点是记录，绿点是任务。</Card.Description>
                </div>
              </div>
            </Card.Header>
            <Card.Content>
              <Calendar
                aria-label="学习日历"
                className="w-full max-w-sm mx-auto"
                value={selectedCalendarDate}
                onChange={(date) => selectDate(dateValueToKey(date))}
                focusedValue={focusedCalendarDate}
                onFocusChange={setFocusedCalendarDate}
              >
                <Calendar.Header>
                  <Calendar.NavButton slot="previous" />
                  <Calendar.Heading />
                  <Calendar.NavButton slot="next" />
                </Calendar.Header>
                <Calendar.Grid weekdayStyle="short">
                  <Calendar.GridHeader>
                    {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                  </Calendar.GridHeader>
                  <Calendar.GridBody>
                    {(date) => {
                      const dateKey = dateValueToKey(date)
                      const hasRecord = recordDates.has(dateKey)
                      const hasTask = taskDates.has(dateKey)

                      return (
                        <Calendar.Cell
                          className={[
                            hasRecord ? 'has-record' : '',
                            hasTask ? 'has-task' : '',
                            dateKey === today ? 'is-today' : '',
                          ].join(' ')}
                          date={date}
                        >
                          {({ formattedDate }) => (
                            <>
                              {formattedDate}
                              {(hasRecord || hasTask) ? (
                                <span className="calendar-markers" aria-hidden="true">
                                  {hasRecord ? <span className="calendar-marker record" /> : null}
                                  {hasTask ? <span className="calendar-marker task" /> : null}
                                </span>
                              ) : null}
                            </>
                          )}
                        </Calendar.Cell>
                      )
                    }}
                  </Calendar.GridBody>
                </Calendar.Grid>
              </Calendar>
            </Card.Content>
          </Card>
        </div>

        {/* Column 3: Selected Date Details */}
        <div className="workbench-col">
          <Card className="panel day-summary-card" variant="default">
            <Card.Header>
              <div className="summary-heading">
                <div>
                  <span className="eyebrow">Selected Date</span>
                  <h2 className="summary-date-title">{formatDate(selectedDate)}</h2>
                </div>
                <div className="summary-counts">
                  <Chip size="sm" variant="soft" color="accent" className="count-chip">
                    {selectedLearningRecords.length} 学习
                  </Chip>
                  <Chip size="sm" variant="soft" color="success" className="count-chip">
                    {selectedReviewRecords.length} 复习
                  </Chip>
                  <Chip size="sm" variant="soft" color="default" className="count-chip">
                    {selectedTasks.length} 任务
                  </Chip>
                </div>
              </div>
            </Card.Header>
            <Card.Content>
              <Tabs className="w-full" key={smartDefaultTab} defaultSelectedKey={smartDefaultTab}>
                <Tabs.ListContainer>
                  <Tabs.List aria-label="日历详情分类" className="w-full justify-between">
                    <Tabs.Tab id="learning" className="flex-1 text-center">
                      学习 ({selectedLearningRecords.length})
                      <Tabs.Indicator />
                    </Tabs.Tab>
                    <Tabs.Tab id="review" className="flex-1 text-center">
                      复习 ({selectedReviewRecords.length})
                      <Tabs.Indicator />
                    </Tabs.Tab>
                    <Tabs.Tab id="tasks" className="flex-1 text-center">
                      任务 ({selectedTasks.length})
                      <Tabs.Indicator />
                    </Tabs.Tab>
                  </Tabs.List>
                </Tabs.ListContainer>

                <Tabs.Panel id="learning" className="tab-panel-scroll pt-4">
                  {selectedLearningRecords.length > 0 ? (
                    <div className="record-list compact">
                      {selectedLearningRecords.map((record) => (
                        <RecordSummary key={record.id} record={record} onOpenPage={setSelectedPageId} />
                      ))}
                    </div>
                  ) : (
                    <Alert className="empty-state-alert">
                      <Alert.Indicator>
                        <BookOpen className="empty-icon" />
                      </Alert.Indicator>
                      <Alert.Content>
                        <Alert.Title>无新增学习记录</Alert.Title>
                        <Alert.Description>这一天没有新的学习笔记。</Alert.Description>
                      </Alert.Content>
                    </Alert>
                  )}
                </Tabs.Panel>

                <Tabs.Panel id="review" className="tab-panel-scroll pt-4">
                  {selectedReviewRecords.length > 0 ? (
                    <div className="record-list compact">
                      {selectedReviewRecords.map((record) => (
                        <RecordSummary key={record.id} record={record} onOpenPage={setSelectedPageId} />
                      ))}
                    </div>
                  ) : (
                    <Alert className="empty-state-alert">
                      <Alert.Indicator>
                        <CircleCheck className="empty-icon" />
                      </Alert.Indicator>
                      <Alert.Content>
                        <Alert.Title>无复习完成记录</Alert.Title>
                        <Alert.Description>这一天没有完成复习。</Alert.Description>
                      </Alert.Content>
                    </Alert>
                  )}
                </Tabs.Panel>

                <Tabs.Panel id="tasks" className="tab-panel-scroll pt-4">
                  {selectedTasks.length > 0 ? (
                    <div className="task-list">
                      {selectedTasks.map((task) => {
                        const relatedRecord = reviewRecords.find(r => r.id === task.relatedRecordId);
                        const page = relatedRecord ? getReviewPageBySource(relatedRecord.sourceFile) : null;
                        return (
                          <Card
                            className={`task-card-premium ${task.completed ? 'completed' : ''}`}
                            key={task.id}
                            variant={task.completed ? 'transparent' : 'default'}
                            onClick={() => openTask(task)}
                            role="button"
                            tabIndex={0}
                          >
                            <Card.Header className="pb-1">
                              <div className="flex w-full items-center justify-between gap-2 mb-1">
                                <TaskBadge type={task.type} completed={task.completed} />
                                <span className="task-stage-meta">{task.stage} · {task.estimate}</span>
                              </div>
                              <Card.Title>{task.title}</Card.Title>
                            </Card.Header>
                            <Card.Content className="py-1">
                              <Card.Description className="task-desc">{task.description}</Card.Description>
                            </Card.Content>
                            {relatedRecord && page && (
                              <Card.Footer className="pt-2">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="w-full justify-center review-basis-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedPageId(page.id);
                                  }}
                                >
                                  <BookOpen className="w-4 h-4 mr-1.5" />
                                  复习依据：{relatedRecord.title}
                                </Button>
                              </Card.Footer>
                            )}
                          </Card>
                        );
                      })}
                    </div>
                  ) : (
                    <Alert className="empty-state-alert">
                      <Alert.Indicator>
                        <CalendarXmark className="empty-icon" />
                      </Alert.Indicator>
                      <Alert.Content>
                        <Alert.Title>当天没有安排复习任务</Alert.Title>
                        <Alert.Description>可以安排新的学习或回顾旧笔记。</Alert.Description>
                      </Alert.Content>
                    </Alert>
                  )}
                </Tabs.Panel>
              </Tabs>
            </Card.Content>
          </Card>
        </div>
      </section>
    </main>
  )
}

type RecordSummaryProps = {
  record: ReviewRecord
  onOpenPage: (pageId: string) => void
}

function TaskBadge({ type, completed }: { type: ReviewTask['type']; completed?: boolean }) {
  const label = completed ? '已复习' : taskLabel(type)
  const color = completed ? 'success' : taskColor(type)
  const BadgeIcon = completed ? CircleCheck : type === 'due' ? TargetDart : type === 'rest' ? Rocket : CalendarXmark
  return (
    <Chip className={`task-badge ${type} ${completed ? 'completed' : ''}`} color={color} size="sm" variant="soft">
      <BadgeIcon className="task-badge-icon" />
      {label}
    </Chip>
  )
}

function RecordSummary({ record, onOpenPage }: RecordSummaryProps) {
  const page = getReviewPageBySource(record.sourceFile)
  const isLearning = isLearningRecord(record)
  const RecordIcon = isLearning ? BookOpen : CircleCheck

  return (
    <Card className="record-card" variant="default">
      <Card.Header className="record-card-header">
        <div className="record-badge-row">
          <div className={`record-icon-badge ${isLearning ? 'learning' : 'review'}`}>
            <RecordIcon className="record-icon-svg" />
          </div>
          <Chip className="record-source" color={isLearning ? 'accent' : 'success'} size="sm" variant="soft">
            {recordTypeLabel(record)} · {record.time}
          </Chip>
        </div>
        <Card.Title>{record.title}</Card.Title>
      </Card.Header>
      <Card.Content>
        <Card.Description>{record.summary}</Card.Description>
      </Card.Content>
      {page ? (
        <Card.Footer>
          <Button size="sm" variant="secondary" onPress={() => onOpenPage(page.id)}>
            打开完整记录
          </Button>
        </Card.Footer>
      ) : null}
    </Card>
  )
}

export default App;
