import { useMemo, useState } from 'react';
import { Button, Calendar, Card, Chip, Tabs } from '@heroui/react';
import { parseDate, type DateValue } from '@internationalized/date';
import './App.css';
import ReviewPageViewer from './components/ReviewPageViewer';
import { getReviewPageBySource, reviewPages } from './data/reviewPages';
import { reviewRecords, reviewTasks, today, type ReviewRecord, type ReviewTask } from './data/summaries';

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
    <div className="calendar-widget-card">
      <div className="calendar-widget-top">{weekday}</div>
      <div className="calendar-widget-body">
        <span className="calendar-widget-day">{day}</span>
        <span className="calendar-widget-month">{month}月</span>
      </div>
    </div>
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

  const recordDates = useMemo(() => new Set(reviewRecords.map((record) => record.date)), [])
  const taskDates = useMemo(() => new Set(reviewTasks.map((task) => task.dueDate)), [])
  const selectedCalendarDate = useMemo(() => parseDate(selectedDate), [selectedDate])

  const selectedRecords = reviewRecords.filter((record) => record.date === selectedDate)
  const selectedLearningRecords = selectedRecords.filter(isLearningRecord)
  const selectedReviewRecords = selectedRecords.filter((record) => !isLearningRecord(record))
  const selectedTasks = reviewTasks.filter((task) => task.dueDate === selectedDate)
  const selectedPage = reviewPages.find((page) => page.id === selectedPageId) ?? null
  const todayTasks = reviewTasks.filter((task) => task.dueDate === today)

  if (selectedPage) {
    return <ReviewPageViewer page={selectedPage} onBack={() => setSelectedPageId(null)} />
  }

  function selectDate(date: string) {
    setSelectedDate(date)
  }

  function openTask(task: ReviewTask) {
    setSelectedDate(task.dueDate)
  }

  return (
    <main className="review-app">
      <header className="home-hero">
        <div>
          <span className="eyebrow">Learning Workbench</span>
          <h1>今天的学习，只看下一步。</h1>
          <p>首页只保留今日复习目标和日历。点开某一天，再看那天学了什么、复习了什么。</p>
        </div>
        {renderCalendarHeaderDate(today)}
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
                {todayTasks.length > 0 ? (
                  todayTasks.map((task) => (
                    <Button
                      className={`target-card ${task.completed ? 'completed' : ''}`}
                      fullWidth
                      key={task.id}
                      variant="ghost"
                      onPress={() => openTask(task)}
                    >
                      <TaskBadge type={task.type} completed={task.completed} />
                      <strong>{task.title}</strong>
                      <small>{task.stage} · {task.estimate}</small>
                      <span className="target-description">{task.description}</span>
                    </Button>
                  ))
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
              <Tabs className="w-full" defaultSelectedKey="learning">
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
                    <div className="empty-state-container">
                      <svg className="empty-state-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>无新增学习记录</span>
                    </div>
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
                    <div className="empty-state-container">
                      <svg className="empty-state-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      <span>无复习完成记录</span>
                    </div>
                  )}
                </Tabs.Panel>

                <Tabs.Panel id="tasks" className="tab-panel-scroll pt-4">
                  {selectedTasks.length > 0 ? (
                    <div className="task-list">
                      {selectedTasks.map((task) => (
                        <Button
                          className={`task-row ${task.completed ? 'completed' : ''}`}
                          fullWidth
                          key={task.id}
                          variant="ghost"
                          onPress={() => openTask(task)}
                        >
                          <TaskBadge type={task.type} completed={task.completed} />
                          <span className="task-row-content">
                            <strong>{task.title}</strong>
                            <small>{task.stage} · {task.estimate}</small>
                            <span className="task-description">{task.description}</span>
                          </span>
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-state-container">
                      <svg className="empty-state-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>当天没有安排复习任务</span>
                    </div>
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
  return (
    <Chip className={`task-badge ${type} ${completed ? 'completed' : ''}`} color={color} size="sm" variant="soft">
      {label}
    </Chip>
  )
}

function RecordSummary({ record, onOpenPage }: RecordSummaryProps) {
  const page = getReviewPageBySource(record.sourceFile)

  return (
    <Card className="record-card" variant="default">
      <Card.Header className="record-card-header">
        <Chip className="record-source" color="accent" size="sm" variant="soft">
          {recordTypeLabel(record)} · {record.time}
        </Chip>
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
