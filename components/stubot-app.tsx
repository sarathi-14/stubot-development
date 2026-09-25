'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Library,
  Menu,
  MessageCircle,
  MoreHorizontal,
  PanelLeftClose,
  Plus,
  Search,
  Send,
  Settings2,
  Sparkles,
  UploadCloud,
  Users,
  X,
} from 'lucide-react'

const subjects = [
  { name: 'Machine Learning', code: 'CS501', tone: 'violet', icon: BrainCircuit, progress: '62%' },
  { name: 'Data Science', code: 'CS502', tone: 'blue', icon: Library, progress: '48%' },
  { name: 'Database Systems', code: 'CS503', tone: 'amber', icon: FileText, progress: '81%' },
  { name: 'Augmented Reality', code: 'CS504', tone: 'rose', icon: GraduationCap, progress: '35%' },
]

const recentChats = ['Decision tree explanation', 'Reinforcement learning', 'Monte Carlo simulation', 'Variance reduction']

export function StubotApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeSubject, setActiveSubject] = useState('Machine Learning')
  const [question, setQuestion] = useState('')
  const [sentQuestion, setSentQuestion] = useState('What is a Decision Tree?')
  const [mode, setMode] = useState<'student' | 'faculty'>('student')

  function askQuestion() {
    const trimmed = question.trim()
    if (!trimmed) return
    setSentQuestion(trimmed)
    setQuestion('')
  }

  return (
    <main className="min-h-screen bg-[#f7f8fc] text-[#14213d]">
      <div className="flex min-h-screen">
        <aside className={`${sidebarOpen ? 'w-[250px]' : 'w-0 overflow-hidden'} hidden shrink-0 flex-col border-r border-[#e8ebf2] bg-white transition-[width] duration-300 lg:flex`}>
          <div className="flex h-[84px] items-center gap-3 border-b border-[#eef0f5] px-7">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[#14213d] text-white"><BrainCircuit className="size-5" /></div>
            <div><p className="text-[17px] font-bold tracking-[-0.03em]">STUBOT</p><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#97a0b5]">Learn from faculty</p></div>
          </div>
          <div className="flex flex-1 flex-col px-4 py-6">
            <p className="px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#a3abc0]">Workspace</p>
            <nav className="mt-3 flex flex-col gap-1">
              <SidebarItem icon={LayoutDashboard} label="Overview" active />
              <SidebarItem icon={BookOpen} label="My subjects" />
              <SidebarItem icon={MessageCircle} label="Conversations" />
            </nav>
            <p className="mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#a3abc0]">Recent chats</p>
            <div className="mt-3 flex flex-col gap-1">
              {recentChats.map((chat, index) => <button key={chat} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] text-[#707b93] hover:bg-[#f5f6fb]"><span className="flex size-6 items-center justify-center rounded-lg bg-[#f1f2f8] text-[10px] font-bold text-[#9aa3b7]">{String(index + 1).padStart(2, '0')}</span><span className="truncate">{chat}</span></button>)}
            </div>
            <div className="mt-auto rounded-2xl bg-[#f5f6fb] p-4"><div className="flex items-center justify-between"><span className="text-[11px] font-bold text-[#69748b]">Knowledge base</span><Check className="size-4 text-[#5ab89d]" /></div><p className="mt-2 text-[12px] leading-relaxed text-[#8b94a9]">Your answers are grounded in 24 faculty documents.</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e5e8f0]"><div className="h-full w-[74%] rounded-full bg-[#5ab89d]" /></div><p className="mt-2 text-[10px] font-semibold text-[#a1a9ba]">74% indexed</p></div>
          </div>
          <div className="border-t border-[#eef0f5] p-4"><button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium text-[#6f7990] hover:bg-[#f7f8fc]"><Settings2 className="size-4" /> Settings</button><div className="mt-3 flex items-center gap-3 rounded-xl border border-[#edf0f5] p-3"><div className="flex size-8 items-center justify-center rounded-full bg-[#dce7ff] text-xs font-bold text-[#4569b4]">AS</div><div className="min-w-0 flex-1"><p className="truncate text-xs font-bold">Aarav Sharma</p><p className="text-[10px] text-[#9ba3b5]">Student · CSE</p></div><MoreHorizontal className="size-4 text-[#a2aabc]" /></div></div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-[84px] items-center justify-between border-b border-[#e8ebf2] bg-white/80 px-5 backdrop-blur-md sm:px-8">
            <div className="flex items-center gap-3"><button onClick={() => setSidebarOpen(!sidebarOpen)} className="hidden rounded-lg p-2 text-[#768199] hover:bg-[#f3f5f9] lg:block" aria-label="Toggle sidebar"><PanelLeftClose className="size-5" /></button><button className="rounded-lg p-2 text-[#768199] lg:hidden" aria-label="Open menu"><Menu className="size-5" /></button><div><p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#a0a8ba]">Student workspace</p><h1 className="text-lg font-bold tracking-[-0.02em]">Good morning, Aarav</h1></div></div>
            <div className="flex items-center gap-2 sm:gap-4"><div className="hidden rounded-xl border border-[#e7eaf1] bg-white p-1 sm:flex"><button onClick={() => setMode('student')} className={`rounded-lg px-3 py-2 text-xs font-semibold ${mode === 'student' ? 'bg-[#14213d] text-white' : 'text-[#8690a5]'}`}>Student view</button><button onClick={() => setMode('faculty')} className={`rounded-lg px-3 py-2 text-xs font-semibold ${mode === 'faculty' ? 'bg-[#14213d] text-white' : 'text-[#8690a5]'}`}>Faculty view</button></div><button className="relative rounded-xl border border-[#e7eaf1] p-2.5 text-[#768199]" aria-label="Notifications"><Clock3 className="size-4" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#ef8e7d]" /></button><div className="flex size-9 items-center justify-center rounded-full bg-[#dce7ff] text-xs font-bold text-[#4569b4]">AS</div></div>
          </header>

          <div className="mx-auto w-full max-w-[1250px] flex-1 px-5 py-7 sm:px-8 lg:px-10">
            {mode === 'faculty' ? <FacultyView /> : <>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-semibold text-[#69758d]">Your learning hub</p><h2 className="mt-1 text-[28px] font-bold tracking-[-0.04em] text-[#14213d]">What do you want to understand?</h2><p className="mt-2 text-sm text-[#8992a7]">Ask a question and we&apos;ll find the answer in your faculty materials.</p></div><Button variant="outline" className="w-fit gap-2 rounded-xl border-[#e3e7ef] bg-white text-[#62708a] shadow-none"><Plus data-icon="inline-start" /> New conversation</Button></div>
              <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_330px]">
                <div className="min-w-0"><div className="rounded-3xl border border-[#e8ebf2] bg-white p-4 shadow-[0_12px_40px_rgba(20,33,61,0.04)] sm:p-6"><div className="flex items-center justify-between border-b border-[#f0f1f5] pb-5"><div className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-xl bg-[#ece9ff] text-[#7165bf]"><BrainCircuit className="size-5" /></div><div><p className="text-sm font-bold">Study session</p><p className="text-xs text-[#99a1b2]">Grounded in your faculty&apos;s sources</p></div></div><span className="flex items-center gap-1.5 rounded-full bg-[#eaf8f3] px-3 py-1.5 text-[10px] font-bold text-[#4d9f84]"><span className="size-1.5 rounded-full bg-[#5ab89d]" /> Knowledge base ready</span></div><div className="flex min-h-[390px] flex-col gap-7 py-7"><div className="flex gap-3"><div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#dce7ff] text-[10px] font-bold text-[#4569b4]">AS</div><div className="max-w-[78%]"><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#a4acbd]">You · just now</p><div className="rounded-2xl rounded-tl-md bg-[#f2f4f9] px-4 py-3 text-sm leading-relaxed text-[#44506a]">{sentQuestion}</div></div></div><div className="flex gap-3"><div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#14213d] text-white"><BrainCircuit className="size-4" /></div><div className="max-w-[88%]"><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#a4acbd]">STUBOT · grounded answer</p><p className="text-[14px] leading-7 text-[#4e5a71]">A <strong className="font-bold text-[#263655]">Decision Tree</strong> is a supervised learning algorithm that uses a tree-like structure to make decisions or predictions. It recursively splits data into smaller groups based on the feature that best separates the target classes.</p><div className="mt-5 rounded-2xl border border-[#e6e9f1] bg-[#fbfcfe] p-4"><div className="flex items-center gap-2 text-xs font-bold text-[#66738b]"><BookOpen className="size-4 text-[#7165bf]" /> Sources used</div><div className="mt-3 flex flex-wrap gap-2"><span className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[11px] font-semibold text-[#6c7890] shadow-sm ring-1 ring-[#eef0f5]"><FileText className="size-3.5 text-[#ef9a83]" /> ML Unit 3 Notes <span className="text-[#a5adbc]">p. 12</span></span><span className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[11px] font-semibold text-[#6c7890] shadow-sm ring-1 ring-[#eef0f5]"><FileText className="size-3.5 text-[#6e9bdd]" /> ML Unit 3 PPT <span className="text-[#a5adbc]">slide 18</span></span></div></div></div></div></div><div className="rounded-2xl border border-[#e4e8f0] bg-[#fafbfe] p-2"><div className="flex items-center gap-2"><input value={question} onChange={(event) => setQuestion(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) askQuestion() }} placeholder="Ask STUBOT about your course materials..." className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-[#2e3b59] outline-none placeholder:text-[#abb2c1]" aria-label="Ask STUBOT a question" /><button onClick={askQuestion} className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#14213d] text-white transition hover:bg-[#23375f]" aria-label="Send question"><Send className="size-4" /></button></div></div></div></div>
                <div className="flex flex-col gap-5"><div><div className="flex items-center justify-between"><h3 className="text-sm font-bold">Your subjects</h3><button className="text-xs font-semibold text-[#7165bf]">View all <ArrowUpRight className="inline size-3" /></button></div><div className="mt-3 flex flex-col gap-2.5">{subjects.map((subject) => <button key={subject.name} onClick={() => setActiveSubject(subject.name)} className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition ${activeSubject === subject.name ? 'border-[#cfc8ff] bg-[#f4f2ff]' : 'border-[#e8ebf2] bg-white hover:border-[#d6dbe7]'}`}><div className={`flex size-10 items-center justify-center rounded-xl ${subject.tone === 'violet' ? 'bg-[#e8e3ff] text-[#7165bf]' : subject.tone === 'blue' ? 'bg-[#e0edff] text-[#5a87c4]' : subject.tone === 'amber' ? 'bg-[#fff0d7] text-[#c49045]' : 'bg-[#ffe5e5] text-[#cf7d7d]'}`}><subject.icon className="size-4.5" /></div><div className="min-w-0 flex-1"><p className="truncate text-xs font-bold">{subject.name}</p><p className="mt-0.5 text-[10px] text-[#9ba3b4]">{subject.code} · {subject.progress} complete</p></div><ChevronDown className="size-4 -rotate-90 text-[#aab1c0]" /></button>)}</div></div><div className="rounded-2xl bg-[#14213d] p-5 text-white"><div className="flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#91a1c2]">Study tip</p><p className="mt-3 text-sm font-semibold leading-6">Try asking follow-up questions to go deeper.</p></div><Sparkles className="size-5 text-[#e6c98d]" /></div><p className="mt-3 text-xs leading-5 text-[#aeb9d1]">STUBOT keeps the context of your session, so you can learn naturally.</p></div></div>
              </div>
            </>}
          </div>
        </section>
      </div>
    </main>
  )
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: typeof LayoutDashboard; label: string; active?: boolean }) {
  return <button className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left text-[13px] font-semibold ${active ? 'bg-[#eef0ff] text-[#6359ae]' : 'text-[#7c869b] hover:bg-[#f7f8fb]'}`}><Icon className="size-4" /> {label}</button>
}

function FacultyView() {
  return <div><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-semibold text-[#69758d]">Faculty workspace</p><h2 className="mt-1 text-[28px] font-bold tracking-[-0.04em]">Keep your knowledge base fresh.</h2><p className="mt-2 text-sm text-[#8992a7]">Upload the materials your students learn from.</p></div><Button className="w-fit gap-2 rounded-xl bg-[#14213d] hover:bg-[#23375f]"><UploadCloud data-icon="inline-start" /> Upload material</Button></div><div className="mt-8 grid gap-5 md:grid-cols-3"><Stat label="Total materials" value="24" detail="+3 this month" icon={FileText} /><Stat label="Students helped" value="186" detail="Across 4 subjects" icon={Users} /><Stat label="Indexed content" value="74%" detail="Processing is healthy" icon={Check} /></div><div className="mt-5 rounded-3xl border border-[#e8ebf2] bg-white p-6"><div className="flex items-center justify-between"><div><h3 className="font-bold">Recent materials</h3><p className="mt-1 text-xs text-[#98a1b3]">Documents available to your students</p></div><button className="rounded-xl border border-[#e4e8ef] p-2 text-[#8590a5]"><Search className="size-4" /></button></div><div className="mt-6 flex flex-col gap-3">{['Machine Learning Unit 3 Notes.pdf', 'Reinforcement Learning — Lecture 4.pptx', 'Data Science Fundamentals.docx'].map((file, index) => <div key={file} className="flex items-center gap-3 rounded-2xl bg-[#fafbfe] p-3"><div className="flex size-10 items-center justify-center rounded-xl bg-[#ece9ff] text-[#7165bf]"><FileText className="size-4" /></div><div className="min-w-0 flex-1"><p className="truncate text-xs font-bold">{file}</p><p className="mt-1 text-[10px] text-[#9ba3b4]">Machine Learning · Unit {index + 2} · Updated today</p></div><span className="flex items-center gap-1.5 rounded-full bg-[#eaf8f3] px-2.5 py-1.5 text-[10px] font-bold text-[#4d9f84]"><span className="size-1.5 rounded-full bg-[#5ab89d]" /> Indexed</span></div>)}</div></div></div>
}

function Stat({ label, value, detail, icon: Icon }: { label: string; value: string; detail: string; icon: typeof FileText }) {
  return <div className="rounded-2xl border border-[#e8ebf2] bg-white p-5"><div className="flex items-center justify-between"><p className="text-xs font-semibold text-[#8b95a9]">{label}</p><Icon className="size-4 text-[#7165bf]" /></div><p className="mt-4 text-3xl font-bold tracking-[-0.04em]">{value}</p><p className="mt-1 text-[10px] font-semibold text-[#5ab89d]">{detail}</p></div>
}
