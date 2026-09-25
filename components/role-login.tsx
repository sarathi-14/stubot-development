'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, BrainCircuit, CheckCircle2, Eye, EyeOff, GraduationCap, ShieldCheck, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function RoleLogin() {
  const [role, setRole] = useState<'student' | 'staff'>('student')
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#f7f8fc] text-[#14213d]">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-5 py-10 sm:px-8">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-[#e8ebf2] bg-white shadow-[0_24px_80px_rgba(20,33,61,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
          <section className="hidden bg-[#14213d] p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white text-[#14213d]"><BrainCircuit className="size-5" /></div>
                <div><p className="text-lg font-bold tracking-[-0.03em]">STUBOT</p><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#91a1c2]">Learn from faculty</p></div>
              </div>
              <div className="mt-24 max-w-sm">
                <p className="text-sm font-semibold text-[#b7c3df]">Your academic companion</p>
                <h1 className="mt-3 text-4xl font-bold leading-tight tracking-[-0.05em]">Understand more. Remember longer.</h1>
                <p className="mt-5 text-sm leading-7 text-[#aeb9d1]">One place for students to explore faculty notes and for staff to keep learning materials organized.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#aeb9d1]"><ShieldCheck className="size-4 text-[#8dd0b6]" /> Separate workspaces for every role</div>
          </section>

          <section className="p-6 sm:p-10 lg:p-14">
            <div className="flex items-center gap-3 lg:hidden"><div className="flex size-9 items-center justify-center rounded-xl bg-[#14213d] text-white"><BrainCircuit className="size-5" /></div><p className="text-lg font-bold">STUBOT</p></div>
            <div className="mt-8 lg:mt-0"><p className="text-sm font-semibold text-[#69758d]">Welcome back</p><h2 className="mt-2 text-3xl font-bold tracking-[-0.05em]">Sign in to your workspace</h2><p className="mt-3 text-sm leading-6 text-[#8992a7]">Choose how you use STUBOT to continue.</p></div>

            <div className="mt-8 grid grid-cols-2 gap-3 rounded-2xl bg-[#f5f6fb] p-1.5" role="tablist" aria-label="Account type">
              <button type="button" role="tab" aria-selected={role === 'student'} onClick={() => { setRole('student'); setSubmitted(false) }} className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition ${role === 'student' ? 'bg-white text-[#6359ae] shadow-sm' : 'text-[#8992a7] hover:text-[#4e5a71]'}`}><GraduationCap className="size-4" /> Student</button>
              <button type="button" role="tab" aria-selected={role === 'staff'} onClick={() => { setRole('staff'); setSubmitted(false) }} className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition ${role === 'staff' ? 'bg-white text-[#6359ae] shadow-sm' : 'text-[#8992a7] hover:text-[#4e5a71]'}`}><Users className="size-4" /> Staff</button>
            </div>

            <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
              <label className="flex flex-col gap-2 text-sm font-semibold text-[#4e5a71]">{role === 'student' ? 'Student email or ID' : 'Staff email'}<input required type={role === 'student' ? 'text' : 'email'} placeholder={role === 'student' ? 'aarav.sharma@university.edu' : 'faculty@university.edu'} className="h-12 rounded-xl border border-[#e3e7ef] bg-[#fbfcfe] px-4 text-sm font-normal outline-none transition placeholder:text-[#b1b8c7] focus:border-[#a9a0eb] focus:ring-4 focus:ring-[#eeecff]" /></label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-[#4e5a71]">Password<div className="relative"><input required minLength={6} type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="h-12 w-full rounded-xl border border-[#e3e7ef] bg-[#fbfcfe] px-4 pr-12 text-sm font-normal outline-none transition placeholder:text-[#b1b8c7] focus:border-[#a9a0eb] focus:ring-4 focus:ring-[#eeecff]" /><button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-[#8992a7] hover:bg-[#f0f1f6]">{showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button></div></label>
              <div className="flex items-center justify-between text-xs"><label className="flex items-center gap-2 text-[#8992a7]"><input type="checkbox" className="size-4 rounded border-[#dfe3ec] accent-[#7165bf]" /> Remember me</label><button type="button" className="font-bold text-[#7165bf] hover:underline">Forgot password?</button></div>
              <Button type="submit" className="mt-2 h-12 rounded-xl bg-[#14213d] text-sm font-bold hover:bg-[#23375f]">Sign in as {role === 'student' ? 'student' : 'staff'} <ArrowRight data-icon="inline-end" /></Button>
              {submitted && <div className="flex items-start gap-2 rounded-xl border border-[#ccecdf] bg-[#f0fbf6] p-3 text-xs leading-5 text-[#438b73]" role="status"><CheckCircle2 className="mt-0.5 size-4 shrink-0" /> Login form is ready. Connect authentication to finish signing in.</div>}
            </form>
            <p className="mt-8 text-center text-xs text-[#9aa3b5]">Need access? <button className="font-bold text-[#7165bf] hover:underline">Contact your administrator</button></p>
          </section>
        </div>
      </div>
    </main>
  )
}
