import React from 'react';
import {  
  CreditCard, 
  CalendarDays, 
  MessageSquareText, 
  LayoutDashboard, 
  UserCheck, 
  BarChart2, 
  ClipboardList, 
  Globe, 
  Globe2, 
  ChevronDown, 
  Utensils, 
  Calendar, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function MockVistomioApp({ t, lang }: { t: any, lang: 'es' | 'en' | 'fr' }) {
  const languageNames = {
    es: 'Español',
    en: 'English',
    fr: 'Français'
  };

  return (
    <div className="w-full flex bg-white text-left text-boutique-navy font-sans" style={{ height: '640px' }}>
      
      {/* --- SIDEBAR --- */}
      <div className="w-[280px] flex-shrink-0 bg-[#F4F1EA] flex flex-col overflow-hidden border-r border-[#E8DFD0]/50 h-full">
        
        {/* Logo Area */}
        <div className="p-8 flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-[14px] border-2 border-[#C6A15B] bg-white flex items-center justify-center text-[#C6A15B] font-serif italic font-bold text-2xl shadow-sm">
            V
          </div>
          <div className="flex flex-col" translate="no">
            <span className="font-extrabold tracking-[0.25em] text-xs text-boutique-navy leading-tight">VISTOMIO</span>
            <span className="font-extrabold tracking-[0.25em] text-[11px] text-boutique-navy leading-tight">APP</span>
          </div>
        </div>

        {/* Usuario Activo Widget */}
        <div className="px-6 mb-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm relative">
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#B5914A]"></div>
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">USUARIO ACTIVO</div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6B4357] flex items-center justify-center text-white">
                <UserCheck size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-boutique-navy leading-tight">Invitado</span>
                <span className="text-xs font-semibold text-gray-500">Hotel Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 py-2 space-y-1 overflow-y-auto custom-scrollbar-mock">
          <MenuItem icon={<LayoutDashboard size={18} />} label={t.sidebar?.dashboard || 'Dashboard'} />
          <MenuItem icon={<CalendarDays size={18} />} label={t.sidebar?.bookingEngine || 'Reservas'} active />
          <MenuItem icon={<CreditCard size={18} />} label={t.sidebar?.payments || 'Pagos'} />
          <MenuItem icon={<UserCheck size={18} />} label={t.sidebar?.checkin || 'Check-in'} />
          <MenuItem icon={<Utensils size={18} />} label={t.sidebar?.restaurant || 'Restaurante'} />
          <MenuItem icon={<ClipboardList size={18} />} label={t.sidebar?.operations || 'Operaciones'} />
          <MenuItem icon={<DollarSign size={18} />} label={t.sidebar?.finance || 'Finanzas'} />
          <MenuItem icon={<MessageSquareText size={18} />} label={t.sidebar?.chatbot || 'Chatbot IA'} />
          <MenuItem icon={<BarChart2 size={18} />} label={t.sidebar?.reports || 'Reportes'} />
        </div>

        {/* Bottom Sidebar Area */}
        <div className="p-6 mt-auto bg-[#F4F1EA] flex flex-col gap-3">
          <div className="flex items-center justify-between bg-white px-4 py-3 border border-gray-200 rounded-xl shadow-sm cursor-pointer">
            <div className="flex items-center gap-2 text-sm font-bold text-boutique-navy/90">
              <Globe size={16} className="text-gray-400" /> {languageNames[lang] || 'Español'}
            </div>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
          <button className="w-full bg-[#2C4A4D] hover:bg-[#203a3d] text-white font-bold text-[11px] uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm">
            <ShieldCheck size={14} /> CONTRATA VISTOMIO
          </button>
          <div className="text-center text-[10px] text-gray-400 mt-1 font-semibold">Demo Version</div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col bg-[#13203A] overflow-hidden relative p-4 lg:p-6 gap-5">
        
        {/* CALENDAR WHITE CARD */}
        <div className="bg-white rounded-3xl flex-1 flex flex-col overflow-hidden shadow-xl">
          {/* Top Header */}
          <div className="pt-6 pb-4 px-8 flex flex-col xl:flex-row xl:items-center justify-between bg-white flex-shrink-0 gap-4 xl:gap-0">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold text-boutique-navy flex items-center gap-3">
                <CalendarDays size={24} className="text-[#C6A15B]" />
                Calendario
              </h1>
              <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-200">
                <div className="bg-white px-5 py-2 rounded-full text-xs font-bold text-boutique-navy shadow-sm flex items-center gap-2">
                  <Calendar size={14} /> Reservas
                </div>
                <div className="px-5 py-2 rounded-full text-xs font-bold text-gray-500 flex items-center gap-2">
                  <div className="font-bold font-sans text-sm">$</div> Tarifas
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex gap-2">
                <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-bold text-boutique-navy flex items-center gap-2 shadow-sm">
                  Agosto <ChevronDown size={14} className="text-gray-400" />
                </div>
                <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-bold text-boutique-navy flex items-center gap-2 shadow-sm">
                  2026 <ChevronDown size={14} className="text-gray-400" />
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-full flex items-center shadow-sm">
                <button className="px-3 py-2 text-gray-400 hover:text-boutique-navy"><ChevronLeft size={14} strokeWidth={3} /></button>
                <div className="px-3 py-2 text-xs font-bold text-boutique-navy tracking-widest text-[#2A75D3]">HOY</div>
                <button className="px-3 py-2 text-gray-400 hover:text-boutique-navy"><ChevronRight size={14} strokeWidth={3} /></button>
              </div>

              {/* Legend */}
              <div className="hidden 2xl:flex items-center gap-4 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm text-[9px] font-bold tracking-widest text-gray-500 uppercase">
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full border border-gray-300"></div> PAGADO</div>
                <div className="flex items-center gap-1.5 text-red-400"><div className="w-2 h-2 rounded-full border border-red-400"></div> POR PAGAR</div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#98C2A0]"></div> EN CURSO</div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#A6BCD7]"></div> CONFIRMADA</div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#64748B]"></div> CHECK-OUT</div>
              </div>
            </div>
          </div>

          {/* GANTT CHART */}
          <div className="flex-1 overflow-hidden flex flex-col border-t border-gray-100">
            {/* Header Row */}
            <div className="flex border-b border-gray-100 bg-white">
              <div className="w-48 flex-shrink-0 p-4 border-r border-gray-100 flex items-end">
                <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">ROOM</span>
              </div>
              <div className="flex-1 grid grid-cols-7 relative">
                {['LUN 17', 'MAR 18', 'MIÉ 19', 'JUE 20', 'VIE 21', 'SÁB 22', 'DOM 23'].map((day: string, i: number) => (
                  <div key={i} className={`flex flex-col items-center justify-center py-3 border-r border-gray-100 ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}>
                    <span className={`text-xs font-bold ${i === 1 ? 'text-[#C6A15B]' : 'text-gray-500'}`}>{day.split(' ')[0]} <br/> {day.split(' ')[1]}</span>
                    <span className={`text-[10px] mt-1 font-bold ${i === 1 ? 'text-[#C6A15B]' : 'text-[#86D097]'}`}>
                      {['75%', '75%', '88%', '50%', '63%', '75%', '88%'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Body */}
            <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar-mock-horizontal">
              <div className="h-[52px] relative flex border-b border-gray-100 group">
                <div className="w-48 flex-shrink-0 px-6 py-0 border-r border-gray-100 flex items-center">
                  <span className="text-[11px] font-bold text-boutique-navy/90">Suite Deluxe Terraza</span>
                </div>
                <div className="flex-1 grid grid-cols-7 relative">
                   {[...Array(7)].map((_, i) => <div key={i} className={`border-r border-gray-100 h-full ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}></div>)}
                   <BookingPill colStart={1} colSpan={2.8} color="green" name="Ashley T..." />
                   <BookingPill colStart={4} colSpan={3} color="blue" name="Paul Thompson" />
                </div>
              </div>
              
              <div className="h-[52px] relative flex border-b border-gray-100 group">
                <div className="w-48 flex-shrink-0 px-6 py-0 border-r border-gray-100 flex items-center">
                  <span className="text-[11px] font-bold text-boutique-navy/90">Suite Deluxe Jardín</span>
                </div>
                <div className="flex-1 grid grid-cols-7 relative">
                   {[...Array(7)].map((_, i) => <div key={i} className={`border-r border-gray-100 h-full ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}></div>)}
                   <BookingPill colStart={0} colSpan={3} color="green" name="Emily Gonzalez" />
                   <BookingPill colStart={3.2} colSpan={3.8} color="blue" name="Ashley Anderson" />
                </div>
              </div>

              <div className="h-[52px] relative flex border-b border-gray-100 group">
                <div className="w-48 flex-shrink-0 px-6 py-0 border-r border-gray-100 flex items-center">
                  <span className="text-[11px] font-bold text-boutique-navy/90">Habitación Deluxe 301</span>
                </div>
                <div className="flex-1 grid grid-cols-7 relative">
                   {[...Array(7)].map((_, i) => <div key={i} className={`border-r border-gray-100 h-full ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}></div>)}
                   <BookingPill colStart={0} colSpan={1.8} color="green" name="Sophia T..." />
                   <BookingPill colStart={2} colSpan={1} color="blue" name="C." />
                   <BookingPill colStart={4} colSpan={3} color="blue" name="Robert Jones" />
                </div>
              </div>

              <div className="h-[52px] relative flex border-b border-gray-100 group">
                <div className="w-48 flex-shrink-0 px-6 py-0 border-r border-gray-100 flex items-center">
                  <span className="text-[11px] font-bold text-boutique-navy/90">Habitación Deluxe 302</span>
                </div>
                <div className="flex-1 grid grid-cols-7 relative">
                   {[...Array(7)].map((_, i) => <div key={i} className={`border-r border-gray-100 h-full ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}></div>)}
                   <BookingPill colStart={1.5} colSpan={3.5} color="blue" name="Jane Jackson" />
                   <BookingPill colStart={6} colSpan={1} color="green" name="Noah Mil..." />
                </div>
              </div>

              <div className="h-[52px] relative flex border-b border-gray-100 group">
                <div className="w-48 flex-shrink-0 px-6 py-0 border-r border-gray-100 flex items-center">
                  <span className="text-[11px] font-bold text-boutique-navy/90">Habitación Jardín 201</span>
                </div>
                <div className="flex-1 grid grid-cols-7 relative">
                   {[...Array(7)].map((_, i) => <div key={i} className={`border-r border-gray-100 h-full ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}></div>)}
                   <BookingPill colStart={0} colSpan={2} color="green" name="Olivia Miller" />
                   <BookingPill colStart={2} colSpan={3} color="blue" name="Jane Martinez" />
                   <BookingPill colStart={6} colSpan={1} color="blue" name="Olivia Anderson" />
                </div>
              </div>
              
              <div className="h-[52px] relative flex border-b border-gray-100 group">
                <div className="w-48 flex-shrink-0 px-6 py-0 border-r border-gray-100 flex items-center">
                  <span className="text-[11px] font-bold text-boutique-navy/90">Habitación Jardín 202</span>
                </div>
                <div className="flex-1 grid grid-cols-7 relative">
                   {[...Array(7)].map((_, i) => <div key={i} className={`border-r border-gray-100 h-full ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}></div>)}
                   <BookingPill colStart={0} colSpan={1} color="green" name="E..." />
                   <BookingPill colStart={1.5} colSpan={1} color="blue" name="J..." />
                   <BookingPill colStart={3} colSpan={1} color="blue" name="S..." />
                   <BookingPill colStart={4} colSpan={1.8} color="blue" name="Paul Miller" />
                   <BookingPill colStart={6} colSpan={1} color="blue" name="Robert Johnson" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CANALES CONECTADOS */}
        <div className="bg-white rounded-[24px] p-5 shadow-xl flex-shrink-0 h-[140px] flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4 px-2">
            <Globe size={18} className="text-boutique-navy" />
            <h3 className="text-[15px] font-bold text-boutique-navy/90">Canales Conectados</h3>
          </div>
          
          <div className="flex gap-4">
            <ChannelCard name="Booking.com" color="blue" subtitle="Conectado" />
            <ChannelCard name="Airbnb" color="red" subtitle="Conectado" />
            <ChannelCard name="Expedia" color="black" subtitle="Conectado" />
            <ChannelCard name="Web Directa" color="purple" subtitle="Conectado" />
            <ChannelCard name="Venta Directa" color="gold" subtitle="Manual" />
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper Components
function MenuItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-5 py-3.5 mx-2 rounded-xl cursor-pointer transition-colors ${active ? 'bg-[#13203A] text-white shadow-md' : 'text-gray-500 hover:bg-black/5'}`}>
      <div className={`${active ? 'text-white' : 'text-gray-400'}`}>{icon}</div>
      <span className={`text-[11px] ${active ? 'font-bold' : 'font-semibold'}`}>{label}</span>
    </div>
  );
}

function DollarSign({ size, className }: { size: number, className?: string }) {
  return <div className={`font-bold font-sans text-[${size}px] ${className}`}>$</div>;
}

function BookingPill({ colStart, colSpan, color, name }: { colStart: number, colSpan: number, color: 'green' | 'blue' | 'gold', name: string }) {
  const bgColors = {
    green: 'bg-[#98C2A0]',
    blue: 'bg-[#A6BCD7]',
    gold: 'bg-[#C2AF8B]'
  };
  
  return (
    <div 
      className={`absolute h-8 rounded-lg flex items-center px-2 gap-2 shadow-sm ${bgColors[color]} text-white text-[10px] font-bold z-10 hover:brightness-110 top-[10px]`}
      style={{
        left: `calc(${(colStart / 7) * 100}% + 8px)`,
        width: `calc(${(colSpan / 7) * 100}% - 16px)`,
        minWidth: '40px'
      }}
    >
      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-black/10">
         <UserCheck size={9} className="text-white" />
      </div>
      <span className="truncate flex-1">{name}</span>
      <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center flex-shrink-0">
        <div className={`w-1.5 h-1.5 rounded-full ${color === 'green' ? 'bg-emerald-500' : color === 'blue' ? 'bg-blue-400' : 'bg-red-400'}`}></div>
      </div>
    </div>
  );
}

function ChannelCard({ name, color, subtitle }: { name: string, color: string, subtitle: string }) {
  const colors: Record<string, string> = {
    blue: 'bg-[#1E3A8A]',
    red: 'bg-[#FF5A5F]',
    black: 'bg-[#1f2937]',
    purple: 'bg-[#8B5CF6]',
    gold: 'bg-[#EAB308]'
  };

  return (
    <div className="flex items-center gap-3 border border-gray-200 rounded-[16px] p-3.5 bg-white flex-1 relative shadow-sm h-[72px]">
      <div className={`w-10 h-10 rounded-[10px] ${colors[color]} flex items-center justify-center text-white flex-shrink-0`}>
        <Globe2 size={20} />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="text-[12px] font-bold text-boutique-navy leading-tight truncate">{name}</div>
        <div className={`text-[9px] font-bold mt-1 ${subtitle === 'Conectado' ? 'text-[#86D097]' : 'text-gray-400'}`}>{subtitle}</div>
        
        <div className="absolute bottom-3 left-16 text-[9px] font-bold text-gray-500">8 Habitaciones</div>
        <div className={`absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full ${subtitle === 'Conectado' ? 'bg-[#86D097]' : 'bg-[#C2AF8B]'}`}></div>
      </div>
    </div>
  );
}
