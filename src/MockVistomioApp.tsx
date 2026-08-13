import React from 'react';
import { 
  LayoutDashboard, CalendarDays, CreditCard, UserCheck, 
  Utensils, ClipboardList, DollarSign, MessageSquareText, 
  BarChart2, ChevronDown, ChevronLeft, ChevronRight, Globe, Search
} from 'lucide-react';

export default function MockVistomioApp({ t, lang }: { t: any, lang: string }) {
  const languageNames: Record<string, string> = {
    es: 'Español',
    en: 'English',
    fr: 'Français'
  };

  return (
    <div className="w-full flex bg-white text-left text-boutique-anthracite font-sans" style={{ height: '640px' }}>
      
      {/* --- SIDEBAR --- */}
      <div className="w-64 flex-shrink-0 bg-[#F4F1EA] flex flex-col overflow-hidden">
        
        {/* Logo Area */}
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-[10px] bg-[#B5914A] flex items-center justify-center text-white font-serif italic font-bold text-xl shadow-sm">
            V
          </div>
          <div className="flex flex-col" translate="no">
            <span className="font-bold tracking-[0.2em] text-[11px] text-gray-800 leading-tight">VISTOMIO</span>
            <span className="font-bold tracking-[0.2em] text-[11px] text-gray-800 leading-tight">APP</span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 px-4 py-2 space-y-1.5 overflow-y-auto custom-scrollbar-mock pr-2">
          <MenuItem icon={<LayoutDashboard size={18} />} label={t.sidebar.dashboard} />
          <MenuItem icon={<CalendarDays size={18} />} label={t.sidebar.bookingEngine} active />
          <MenuItem icon={<CreditCard size={18} />} label={t.sidebar.payments} />
          <MenuItem icon={<UserCheck size={18} />} label={t.sidebar.checkin} />
          <MenuItem icon={<Utensils size={18} />} label={t.sidebar.restaurant} />
          <MenuItem icon={<ClipboardList size={18} />} label={t.sidebar.operations} />
          <MenuItem icon={<DollarSign size={18} />} label={t.sidebar.finance} />
          <MenuItem icon={<MessageSquareText size={18} />} label={t.sidebar.chatbot} />
          <MenuItem icon={<BarChart2 size={18} />} label={t.sidebar.reports} />
        </div>

        {/* Bottom Sidebar Area */}
        <div className="p-4 mt-auto bg-[#F4F1EA]">
          <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl shadow-sm mb-4 cursor-pointer">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
              <Globe size={16} className="text-gray-400" /> {languageNames[lang] || 'Español'}
            </div>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
        
        {/* Top Header */}
        <div className="pt-5 pb-3 px-6 flex flex-col xl:flex-row xl:items-center justify-between bg-white flex-shrink-0">
          <h1 className="text-xl font-bold text-[#111] leading-tight flex flex-col mb-3 xl:mb-0">
            <span>{t.header.title1}</span>
            <span>{t.header.title2}</span>
          </h1>
          <div className="flex flex-wrap items-center gap-2 lg:gap-3">
            <div className="hidden lg:flex items-center bg-gray-50/50 rounded-2xl px-3 py-1.5 border border-gray-100/80">
              <Search size={14} className="text-gray-400 mr-2" />
              <div className="text-[10px] leading-tight text-gray-400 font-medium flex flex-col">
                <span>{t.header.search.split(' ')[0]}</span>
                <span>{t.header.search.split(' ').slice(1).join(' ')}</span>
              </div>
            </div>
            <div className="flex gap-1.5">
              <Badge count="8" label={t.header.rooms} color="emerald" />
              <Badge count="5" label={t.header.channels} color="amber" />
            </div>
            <button className="bg-white border-2 border-gray-100/80 hover:border-gray-200 px-3 py-1 rounded-2xl text-[9px] font-bold tracking-widest text-gray-700 uppercase flex items-center gap-2 shadow-sm transition-all">
              <span className="text-gray-400 text-sm">+</span>
              <div className="flex flex-col text-left leading-tight">
                <span>{t.header.newRes1}</span>
                <span>{t.header.newRes2}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="px-6 pb-3 flex flex-wrap items-center justify-between gap-3 flex-shrink-0 border-b border-gray-50 mb-2">
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-start gap-2 font-bold text-gray-700 w-28 leading-tight text-xs">
              <CalendarDays size={14} className="text-[#D4AF37] mt-0.5" />
              {t.toolbar.calendar}
            </div>
            <div className="flex bg-gray-50/80 p-1 rounded-2xl border border-gray-100">
              <button className="bg-white px-3 py-1.5 rounded-[12px] shadow-sm border border-gray-100 text-[11px] font-bold flex items-center gap-1.5 text-gray-800">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> {t.toolbar.reservations}
              </button>
              <button className="px-3 py-1.5 rounded-[12px] text-[11px] font-bold text-gray-500 flex items-center gap-1.5">
                 $ {t.toolbar.rates}
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-white border border-gray-200/80 rounded-xl px-3 py-1.5 shadow-sm text-[11px] font-bold text-gray-600">
                {t.toolbar.august} <ChevronDown size={14} className="text-gray-400" />
              </div>
              <div className="flex items-center gap-1 bg-white border border-gray-200/80 rounded-xl px-3 py-1.5 shadow-sm text-[11px] font-bold text-gray-600">
                2026 <ChevronDown size={14} className="text-gray-400" />
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="p-1.5 bg-white border border-gray-200/80 rounded-xl text-gray-600 shadow-sm"><ChevronLeft size={14} strokeWidth={3} /></button>
              <button className="px-3 py-1.5 bg-white border border-gray-200/80 shadow-sm rounded-xl text-[9px] font-bold tracking-widest text-[#2A75D3]">{t.toolbar.today}</button>
              <button className="p-1.5 bg-white border border-gray-200/80 rounded-xl text-gray-600 shadow-sm"><ChevronRight size={14} strokeWidth={3} /></button>
            </div>
          </div>
        </div>

        {/* GANTT CHART */}
        <div className="flex-1 overflow-hidden px-8 pb-4 flex flex-col">
          <div className="border-2 border-gray-100/60 rounded-[1.5rem] flex-1 flex flex-col bg-white overflow-hidden shadow-sm">
            {/* Header Row */}
            <div className="flex border-b-2 border-gray-100/60 bg-white">
              <div className="w-48 flex-shrink-0 p-4 border-r-2 border-gray-100/60 flex items-end">
                <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">{t.grid.room}</span>
              </div>
              <div className="flex-1 grid grid-cols-7 relative">
                {t.grid.days.map((day: string, i: number) => (
                  <div key={i} className={`flex flex-col items-center justify-center py-3 border-r-2 border-gray-100/60 ${i === 1 ? 'bg-amber-50/20' : ''}`}>
                    <span className={`text-xs font-bold ${i === 1 ? 'text-[#D4AF37]' : 'text-gray-500'}`}>{day} ${12 + i}</span>
                    <span className={`text-[10px] mt-1 font-bold ${i === 1 ? 'text-[#D4AF37]' : 'text-emerald-500'}`}>
                      {['85%', '63%', '83%', '63%', '70%', '50%', '38%'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Body */}
            <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar-mock-horizontal">
              <div className="h-16 relative flex border-b-2 border-gray-100/60 group">
                <div className="w-48 flex-shrink-0 px-4 py-0 border-r-2 border-gray-100/60 flex items-center">
                  <span className="text-[11px] font-bold text-gray-700">{t.grid.rooms?.[0] || 'Suite Deluxe'}</span>
                </div>
                <div className="flex-1 grid grid-cols-7 relative">
                   {[...Array(7)].map((_, i) => <div key={i} className={`border-r-2 border-gray-100/60 h-full ${i === 1 ? 'bg-amber-50/20' : ''}`}></div>)}
                   <BookingPill colStart={0} colSpan={1.5} color="emerald" name="Loi..." top="16px" />
                   <BookingPill colStart={2} colSpan={2} color="gold" name="Javier S." top="16px" />
                   <BookingPill colStart={5} colSpan={1.5} color="gold" name="M..." top="16px" />
                </div>
              </div>
              
              <div className="h-16 relative flex border-b-2 border-gray-100/60 group">
                <div className="w-48 flex-shrink-0 px-4 py-0 border-r-2 border-gray-100/60 flex items-center">
                  <span className="text-[11px] font-bold text-gray-700">{t.grid.rooms?.[1] || 'Suite Garden'}</span>
                </div>
                <div className="flex-1 grid grid-cols-7 relative">
                   {[...Array(7)].map((_, i) => <div key={i} className={`border-r-2 border-gray-100/60 h-full ${i === 1 ? 'bg-amber-50/20' : ''}`}></div>)}
                   <BookingPill colStart={0} colSpan={4} color="emerald" name="Diego F." top="16px" />
                   <BookingPill colStart={4} colSpan={3} color="gold" name="Pedro H." top="16px" />
                </div>
              </div>

              <div className="h-16 relative flex border-b-2 border-gray-100/60 group">
                <div className="w-48 flex-shrink-0 px-4 py-0 border-r-2 border-gray-100/60 flex items-center">
                  <span className="text-[11px] font-bold text-gray-700">{t.grid.rooms?.[2] || 'Room 301'}</span>
                </div>
                <div className="flex-1 grid grid-cols-7 relative">
                   {[...Array(7)].map((_, i) => <div key={i} className={`border-r-2 border-gray-100/60 h-full ${i === 1 ? 'bg-amber-50/20' : ''}`}></div>)}
                   <BookingPill colStart={1.5} colSpan={3} color="gold" name="Roberto G." top="16px" />
                   <BookingPill colStart={5} colSpan={2} color="emerald" name="Javier S." top="16px" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CANALES CONECTADOS */}
        <div className="px-8 pb-8 flex-shrink-0">
          <div className="border-2 border-gray-100/60 rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-2 mb-4">
              <Globe size={16} className="text-gray-400" />
              <h3 className="text-sm font-bold text-gray-700">{t.channels.title}</h3>
            </div>
            
            <div className="flex gap-4">
              <ChannelCard name="Booking.com" color="blue" subtitle={t.channels.synced} />
              <ChannelCard name="Airbnb" color="red" subtitle={t.channels.synced} />
              <ChannelCard name="Expedia" color="black" subtitle={t.channels.synced} />
              <ChannelCard name={t.channels.directWeb} color="purple" subtitle={t.channels.active} />
              <ChannelCard name={t.channels.directSale} color="gold" subtitle={t.channels.active} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper Components
function MenuItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-5 py-4 rounded-[14px] cursor-pointer transition-colors ${active ? 'bg-[#A37A3B] text-white shadow-md' : 'text-gray-500'}`}>
      <div className={`${active ? 'text-white' : 'text-gray-400'}`}>{icon}</div>
      <span className={`text-[11px] ${active ? 'font-bold' : 'font-bold'}`}>{label}</span>
    </div>
  );
}

function Badge({ count, label, color }: { count: string, label: string, color: 'emerald' | 'amber' }) {
  const colors = {
    emerald: 'text-emerald-500 border-emerald-300 bg-emerald-50/50',
    amber: 'text-amber-500 border-amber-300 bg-amber-50/50'
  };
  return (
    <div className={`px-3 py-1 flex flex-col items-center justify-center rounded-xl border ${colors[color]} text-[8px] font-bold tracking-widest leading-tight`}>
      <span className="text-[11px]">{count}</span>
      <span>{label}</span>
    </div>
  );
}

function BookingPill({ colStart, colSpan, color, name, top }: { colStart: number, colSpan: number, color: 'emerald' | 'gold', name: string, top: string }) {
  const bgColors = {
    emerald: 'bg-[#2dd4bf]',
    gold: 'bg-[#B5914A]'
  };
  
  return (
    <div 
      className={`absolute h-7 rounded-full flex items-center px-2 gap-2 shadow-sm ${bgColors[color]} text-white text-[10px] font-bold z-10 hover:brightness-110`}
      style={{
        left: `calc(${(colStart / 7) * 100}% + 8px)`,
        width: `calc(${(colSpan / 7) * 100}% - 16px)`,
        top: top,
        minWidth: '60px'
      }}
    >
      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 border border-white/40">
         <UserCheck size={9} className="text-white/80" />
      </div>
      <span className="truncate flex-1">{name}</span>
      <div className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0"></div>
    </div>
  );
}

function ChannelCard({ name, color, subtitle }: { name: string, color: string, subtitle: string }) {
  const colors: Record<string, string> = {
    blue: 'bg-[#3b82f6]',
    red: 'bg-[#ef4444]',
    black: 'bg-[#1f2937]',
    purple: 'bg-[#a855f7]',
    gold: 'bg-[#ca8a04]'
  };

  return (
    <div className="flex items-center gap-3 border border-gray-100 rounded-[14px] px-4 py-2.5 bg-white shadow-sm flex-1">
      <div className={`w-8 h-8 rounded-[8px] ${colors[color]} flex items-center justify-center text-white flex-shrink-0`}>
        <Globe size={14} />
      </div>
      <div className="overflow-hidden">
        <div className="text-[11px] font-bold text-gray-800 leading-tight truncate">{name}</div>
        <div className="text-[9px] text-gray-500 font-semibold mt-0.5">{subtitle}</div>
      </div>
    </div>
  );
}
