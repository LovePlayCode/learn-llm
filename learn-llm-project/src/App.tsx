import { useMemo, useState } from 'react';
import { Button, Calendar, Card, Chip } from '@heroui/react';
import { parseDate, type DateValue } from '@internationalized/date';
import './App.css';
import ReviewPageViewer from './components/ReviewPageViewer';
import { getReviewPageBySource, reviewPages } from './data/reviewPages';
import { reviewRecords, reviewTasks, today, type ReviewRecord, type ReviewTask } from './data/summaries';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('zh-CN', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }).format(new Date(`${date}T08:00:00`))
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
        <time dateTime={today}>{formatDate(today)}</time>
      </header>

      <section className="focus-grid">
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
                    className="target-card"
                    fullWidth
                    key={task.id}
                    variant="ghost"
                    onPress={() => openTask(task)}
                  >
                    <TaskBadge type={task.type} />
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

        <Card className="panel calendar-panel" variant="default">
          <Card.Header>
            <div className="calendar-head">
              <div>
                <span className="eyebrow">Calendar</span>
                <Card.Title>学习日历</Card.Title>
                <Card.Description>蓝点是学习/复习记录，绿点是复习任务。</Card.Description>
              </div>
            </div>
          </Card.Header>
          <Card.Content>
            <Calendar.Root
              aria-label="学习日历"
              className="learning-calendar"
              value={selectedCalendarDate}
              onChange={(date) => selectDate(dateValueToKey(date))}
            >
              <Calendar.Header className="learning-calendar-header">
                <Calendar.NavButton slot="previous" />
                <Calendar.Heading />
                <Calendar.NavButton slot="next" />
              </Calendar.Header>
              <Calendar.Grid className="learning-calendar-grid" weekdayStyle="short">
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
                          <span className="calendar-cell-inner">
                            <span>{formattedDate}</span>
                            {(hasRecord || hasTask) ? (
                              <span className="calendar-markers" aria-hidden="true">
                                {hasRecord ? <span className="calendar-marker record" /> : null}
                                {hasTask ? <span className="calendar-marker task" /> : null}
                              </span>
                            ) : null}
                          </span>
                        )}
                      </Calendar.Cell>
                    )
                  }}
                </Calendar.GridBody>
              </Calendar.Grid>
            </Calendar.Root>
          </Card.Content>
        </Card>
      </section>

      <section className="day-summary" aria-label="选中日期的学习和复习摘要">
        <div className="summary-heading">
          <div>
            <span className="eyebrow">Selected Date</span>
            <h2>{formatDate(selectedDate)}</h2>
          </div>
          <div className="summary-counts" aria-label="当天概览">
            <Chip className="summary-count" color="default" size="sm" variant="soft">
              {selectedLearningRecords.length} 学习
            </Chip>
            <Chip className="summary-count" color="default" size="sm" variant="soft">
              {selectedReviewRecords.length} 复习
            </Chip>
            <Chip className="summary-count" color="default" size="sm" variant="soft">
              {selectedTasks.length} 任务
            </Chip>
          </div>
        </div>

        <div className="summary-grid">
          <Card className="panel summary-card" variant="default">
            <Card.Header>
              <Card.Title>学习了什么</Card.Title>
              <Card.Description>当天新增的学习记录。</Card.Description>
            </Card.Header>
            <Card.Content>
              {selectedLearningRecords.length > 0 ? (
                <div className="record-list compact">
                  {selectedLearningRecords.map((record) => (
                    <RecordSummary key={record.id} record={record} onOpenPage={setSelectedPageId} />
                  ))}
                </div>
              ) : (
                <p className="empty-text">这一天还没有学习记录。</p>
              )}
            </Card.Content>
          </Card>

          <Card className="panel summary-card" variant="default">
            <Card.Header>
              <Card.Title>复习了什么</Card.Title>
              <Card.Description>当天完成或迁移的复习记录。</Card.Description>
            </Card.Header>
            <Card.Content>
              {selectedReviewRecords.length > 0 ? (
                <div className="record-list compact">
                  {selectedReviewRecords.map((record) => (
                    <RecordSummary key={record.id} record={record} onOpenPage={setSelectedPageId} />
                  ))}
                </div>
              ) : (
                <p className="empty-text">这一天还没有复习记录。</p>
              )}
            </Card.Content>
          </Card>

          <Card className="panel summary-card" variant="default">
            <Card.Header>
              <Card.Title>当天任务</Card.Title>
              <Card.Description>需要做的复习或整理安排。</Card.Description>
            </Card.Header>
            <Card.Content>
              {selectedTasks.length > 0 ? (
                <div className="task-list">
                  {selectedTasks.map((task) => (
                    <Button
                      className="task-row"
                      fullWidth
                      key={task.id}
                      variant="ghost"
                      onPress={() => openTask(task)}
                    >
                      <TaskBadge type={task.type} />
                      <span className="task-row-content">
                        <strong>{task.title}</strong>
                        <small>{task.stage} · {task.estimate}</small>
                        <span className="task-description">{task.description}</span>
                      </span>
                    </Button>
                  ))}
                </div>
              ) : (
                <p className="empty-text">这一天没有复习任务。</p>
              )}
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

function TaskBadge({ type }: { type: ReviewTask['type'] }) {
  return (
    <Chip className={`task-badge ${type}`} color={taskColor(type)} size="sm" variant="soft">
      {taskLabel(type)}
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

export default App
