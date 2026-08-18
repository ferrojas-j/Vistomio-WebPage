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
  ChevronLeft,
  ChevronRight,
  Home,
  User,
  BedDouble,
  CheckCircle2,
  
  
  ShieldCheck
} from 'lucide-react';

export default function MockVistomioApp({ t }: { t: any, lang?: string }) {
  return (
    <div className="w-full h-full flex bg-[#13203A] text-left text-boutique-navy font-sans p-6 gap-6">
      
      {/* --- SIDEBAR --- */}
      <div className="w-[300px] flex-shrink-0 bg-[#F4F1EA] flex flex-col overflow-hidden rounded-[24px] shadow-xl">
        
        {/* Logo Area */}
        <div className="p-8 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl border-2 border-[#C6A15B] bg-white flex items-center justify-center text-[#C6A15B] font-bold text-3xl shadow-sm flex-shrink-0">
            V
          </div>
          <div className="flex flex-col" translate="no">
            <span className="font-black tracking-[0.2em] text-lg text-boutique-navy leading-tight">VISTOMIO</span>
            <span className="font-extrabold tracking-[0.2em] text-[12px] text-boutique-navy leading-tight">APP</span>
          </div>
        </div>

                {/* Usuario Activo Widget */}
        <div className="px-6 mb-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm relative">
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#B5914A]"></div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">USUARIO ACTIVO</div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#6B4357] flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-boutique-navy leading-tight">Invitado</span>
                <span className="text-xs font-semibold text-gray-500">Hotel Demo</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="flex-1 py-4 space-y-2 overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden">
          <MenuItem icon={<LayoutDashboard className="w-5 h-5" />} label={t.sidebar?.dashboard || 'Dashboard General'} />
          <MenuItem icon={<CalendarDays className="w-5 h-5" />} label={t.sidebar?.bookingEngine || 'Motor de Reservas y Channel Manager'} active />
          <MenuItem icon={<CreditCard className="w-5 h-5" />} label={t.sidebar?.payments || 'Pagos y Facturación'} />
          <MenuItem icon={<UserCheck className="w-5 h-5" />} label={t.sidebar?.checkin || 'Check-in y Gestión de Huéspedes'} />
          <MenuItem icon={<Utensils className="w-5 h-5" />} label={t.sidebar?.restaurant || 'Restaurante / Bar'} />
          <MenuItem icon={<ClipboardList className="w-5 h-5" />} label={t.sidebar?.operations || 'Operaciones Diarias y Recursos'} />
          <MenuItem icon={<DollarSign className="text-xl" />} label={t.sidebar?.finance || 'Administración y Finanzas'} />
          <MenuItem icon={<MessageSquareText className="w-5 h-5" />} label={t.sidebar?.chatbot || 'Chatbot IA'} />
          <MenuItem icon={<BarChart2 className="w-5 h-5" />} label={t.sidebar?.reports || 'Reportes'} />
        </div>

        {/* Bottom Sidebar Area */}
        <div className="p-6 mt-auto bg-[#F4F1EA] flex flex-col gap-3">
          <div className="flex items-center justify-between bg-white px-5 py-3.5 border border-gray-200 rounded-[14px] shadow-sm cursor-pointer">
            <div className="flex items-center gap-2 text-sm font-bold text-boutique-navy/90">
              <Globe className="w-4 h-4 text-gray-400" /> Español
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <button className="w-full bg-[#2C4A4D] hover:bg-[#203a3d] text-white font-bold text-[12px] uppercase tracking-widest py-4 rounded-[14px] flex items-center justify-center gap-2 transition-colors shadow-sm">
            <ShieldCheck className="w-4 h-4" /> CONTRATA VISTOMIO
          </button>
          <div className="text-center text-[11px] text-gray-400 mt-2 font-semibold tracking-wide">Demo Version</div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col overflow-hidden relative gap-6">
        
        {/* CALENDAR WHITE CARD */}
        <div className="bg-white rounded-[24px] flex-1 flex flex-col overflow-hidden shadow-xl min-h-0">
          
          {/* Top Header */}
          <div className="pt-6 pb-4 px-8 flex flex-row items-start justify-between bg-white flex-shrink-0">
            
            {/* Left: Title & Toggle */}
            <div className="flex items-center gap-8">
              <h1 className="text-[28px] text-boutique-navy flex items-center gap-3 font-serif font-normal tracking-[0.03em] leading-relaxed">
                <CalendarDays className="w-7 h-7 text-[#C6A15B]" />
                Calendario
              </h1>

              <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-200">
                <div className="bg-white px-5 py-2.5 rounded-full text-sm font-bold text-boutique-navy shadow-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Reservas
                </div>
                <div className="px-5 py-2.5 rounded-full text-sm font-bold text-gray-500 flex items-center gap-2">
                  <div className="font-bold font-sans text-base">$</div> Tarifas
                </div>
              </div>
            </div>

            {/* Center: Date Selectors & Navigation */}
            <div className="flex flex-col items-center gap-3 absolute left-1/2 -translate-x-1/2">
              <div className="flex gap-3">
                <div className="bg-white border border-gray-200 rounded-full px-6 py-2.5 text-sm font-bold text-boutique-navy flex items-center gap-3 shadow-sm">
                  Agosto <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <div className="bg-white border border-gray-200 rounded-full px-6 py-2.5 text-sm font-bold text-boutique-navy flex items-center gap-3 shadow-sm">
                  2026 <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-full flex items-center shadow-sm">
                <button className="px-4 py-1.5 text-gray-400 hover:text-boutique-navy"><ChevronLeft className="w-4 h-4" strokeWidth={3} /></button>
                <div className="px-4 py-1.5 text-sm font-bold text-boutique-navy tracking-widest text-[#2A75D3]">HOY</div>
                <button className="px-4 py-1.5 text-gray-400 hover:text-boutique-navy"><ChevronRight className="w-4 h-4" strokeWidth={3} /></button>
              </div>
            </div>

            {/* Right: Legend */}
            <div className="flex items-center gap-5 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm text-[11px] font-bold tracking-widest text-gray-500 uppercase">
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full border border-gray-300"></div> PAGADO</div>
              <div className="flex items-center gap-1.5 text-[#E68A8A]"><div className="w-2.5 h-2.5 rounded-full border border-[#E68A8A]"></div> POR PAGAR</div>
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#98C2A0]"></div> EN CURSO</div>
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#A6BCD7]"></div> CONFIRMADA</div>
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#64748B]"></div> CHECK-OUT</div>
            </div>

          </div>

          {/* GANTT CHART */}
          <div className="flex-1 overflow-auto flex flex-col border-t border-gray-100">
            {/* Header Row */}
            <div className="flex border-b border-gray-100 bg-white min-w-[1200px]">
              <div className="w-[280px] flex-shrink-0 p-5 border-r border-gray-100 flex items-end">
                <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">ROOM</span>
              </div>
              <div className="flex-1 grid grid-cols-15 relative" style={{ gridTemplateColumns: 'repeat(15, minmax(0, 1fr))' }}>
                {['LUN 17', 'MAR 18', 'MIÉ 19', 'JUE 20', 'VIE 21', 'SÁB 22', 'DOM 23', 'LUN 24', 'MAR 25', 'MIÉ 26', 'JUE 27', 'VIE 28', 'SÁB 29', 'DOM 30', 'LUN 31'].map((day: string, i: number) => (
                  <div key={i} className={`flex flex-col items-center justify-center py-4 border-r border-gray-100 ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}>
                    <span className={`text-sm font-bold ${i === 1 ? 'text-[#C6A15B]' : 'text-gray-500'}`}>{day.split(' ')[0]} <br/> {day.split(' ')[1]}</span>
                    <span className={`text-xs mt-1.5 font-bold ${i === 1 ? 'text-[#C6A15B]' : i === 7 ? 'text-white bg-[#C6A15B] px-2 py-0.5 rounded-md' : 'text-[#86D097]'}`}>
                      {['75%', '75%', '88%', '50%', '63%', '75%', '88%', '100%', '88%', '63%', '50%', '38%', '75%', '75%', '63%'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Body */}
            <div className="flex-1 flex flex-col overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden min-w-[1200px]">
              
              <GanttRow name="Suite Deluxe Terraza">
                   <BookingPill colStart={1} colSpan={4} color="green" icon="home" name="Ashley T..." />
                   <BookingPill colStart={5.2} colSpan={4.8} color="blue" icon="user" name="Paul Thompson" />
                   <BookingPill colStart={10.2} colSpan={4.8} color="blue" icon="user" name="Emma Taylor" />
              </GanttRow>

              <GanttRow name="Suite Deluxe Jardín">
                   <BookingPill colStart={0} colSpan={3} color="green" icon="user" name="Emily Gonzalez" />
                   <BookingPill colStart={3.2} colSpan={6.8} color="blue" icon="user" name="Ashley Anderson" />
              </GanttRow>

              <GanttRow name="Habitación Deluxe 301">
                   <BookingPill colStart={0} colSpan={1.8} color="green" icon="home" name="Sophia T..." />
                   <BookingPill colStart={2.2} colSpan={1} color="blue" icon="user" name="C." />
                   <BookingPill colStart={5.5} colSpan={6.5} color="blue" icon="user" name="Robert Jones" />
              </GanttRow>

              <GanttRow name="Habitación Deluxe 302">
                   <BookingPill colStart={2.5} colSpan={6.5} color="blue" icon="user" name="Jane Jackson" />
                   <BookingPill colStart={12.5} colSpan={2.5} color="green" icon="home" name="Noah Mil..." />
              </GanttRow>

              <GanttRow name="Habitación Jardín 201">
                   <BookingPill colStart={0} colSpan={2} color="green" icon="home" name="Olivia Miller" />
                   <BookingPill colStart={2.2} colSpan={6.8} color="blue" icon="home" name="Jane Martinez" />
                   <BookingPill colStart={11.5} colSpan={3.5} color="green" icon="user" name="Olivia Anderson" />
              </GanttRow>
              
              <GanttRow name="Habitación Jardín 202">
                   <BookingPill colStart={0} colSpan={0.8} color="green" icon="user" name="E..." />
                   <BookingPill colStart={1} colSpan={0.8} color="blue" icon="user" name="J." />
                   <BookingPill colStart={2} colSpan={0.8} color="blue" icon="user" name="S." />
                   <BookingPill colStart={3} colSpan={3} color="blue" icon="home" name="Paul Miller" />
                   <BookingPill colStart={6.2} colSpan={2.8} color="blue" icon="home" name="Robert Johnson" />
              </GanttRow>

              <GanttRow name="Loft Terraza 01">
                   <BookingPill colStart={0} colSpan={2.8} color="green" icon="home" name="Elias Gonzalez" />
                   <BookingPill colStart={3} colSpan={6} color="blue" icon="user" name="Thomas Jones" />
                   <BookingPill colStart={9.5} colSpan={5.5} color="blue" icon="user" name="David Gonzalez" />
              </GanttRow>

              <GanttRow name="Loft Terraza 02">
                   <BookingPill colStart={0} colSpan={2.8} color="green" icon="home" name="Sophia Garcia" />
                   <BookingPill colStart={3} colSpan={7} color="blue" icon="user" name="Olivia Johnson" />
                   <BookingPill colStart={10.5} colSpan={4.5} color="blue" icon="home" name="Elias Miller" />
              </GanttRow>

            </div>
          </div>
        </div>

        {/* CANALES CONECTADOS */}
        <div className="bg-white rounded-[24px] p-8 shadow-xl flex-shrink-0 h-[180px] flex flex-col justify-center overflow-hidden">
          <div className="flex items-center gap-3 mb-6 px-2">
            <Globe className="w-5 h-5 text-boutique-navy" />
            <h3 className="text-xl text-boutique-navy font-serif font-normal tracking-[0.05em]">Canales Conectados</h3>
          </div>
          
          <div className="flex gap-6 overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden">
            <ChannelCard name="Booking.com" color="blue" subtitle="Conectado" rooms="8 Habitaciones" />
            <ChannelCard name="Airbnb" color="red" subtitle="Conectado" rooms="6 Habitaciones" />
            <ChannelCard name="Expedia" color="black" subtitle="Conectado" rooms="8 Habitaciones" />
            <ChannelCard name="Web Directa" color="purple" subtitle="Conectado" rooms="8 Habitaciones" />
            <ChannelCard name="Venta Directa" color="gold" subtitle="Manual" rooms="8 Habitaciones" />
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper Components
function MenuItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-4 px-6 py-4 mx-4 rounded-xl cursor-pointer transition-colors ${active ? 'bg-[#13203A] text-white shadow-md' : 'text-gray-500 hover:bg-black/5'}`}>
      <div className={`${active ? 'text-white' : 'text-gray-400'}`}>{icon}</div>
      <span className={`text-[14px] leading-tight ${active ? 'font-bold' : 'font-semibold'}`} style={{ maxWidth: '180px' }}>{label}</span>
    </div>
  );
}

function DollarSign({ className }: { className?: string }) {
  return <div className={`font-bold font-sans ${className}`}>$</div>;
}

function GanttRow({ name, children }: { name: string, children: React.ReactNode }) {
  return (
    <div className="h-[60px] min-h-[60px] flex-shrink-0 relative flex border-b border-gray-100 group">
      <div className="w-[280px] flex-shrink-0 px-8 py-0 border-r border-gray-100 flex items-center">
        <span className="text-[13px] font-bold text-boutique-navy/90 truncate">{name}</span>
      </div>
      <div className="flex-1 grid grid-cols-15 relative" style={{ gridTemplateColumns: 'repeat(15, minmax(0, 1fr))' }}>
         {[...Array(15)].map((_, i) => <div key={i} className={`border-r border-gray-100 h-full ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}></div>)}
         {children}
      </div>
    </div>
  );
}

function BookingPill({ colStart, colSpan, color, name, icon }: { colStart: number, colSpan: number, color: 'green' | 'blue' | 'gold', name: string, icon: 'user' | 'home' | 'bed' }) {
  const bgColors = {
    green: 'bg-[#98C2A0]',
    blue: 'bg-[#A6BCD7]',
    gold: 'bg-[#C2AF8B]'
  };
  
  const IconCmp = icon === 'home' ? Home : icon === 'bed' ? BedDouble : User;

  return (
    <div 
      className={`absolute h-10 rounded-xl flex items-center px-3 gap-3 shadow-sm ${bgColors[color]} text-white text-[12px] font-bold z-10 top-[10px]`}
      style={{
        left: `calc(${(colStart / 15) * 100}% + 6px)`,
        width: `calc(${(colSpan / 15) * 100}% - 12px)`,
        minWidth: '60px'
      }}
    >
      <div className="flex w-6 h-6 rounded-md items-center justify-center flex-shrink-0 bg-white/30">
         <IconCmp className="w-3.5 h-3.5 text-white" strokeWidth={3} />
      </div>
      <span className="truncate flex-1">{name}</span>
      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
         <CheckCircle2 className="w-4 h-4 text-white" />
      </div>
    </div>
  );
}

function ChannelCard({ name, color, subtitle, rooms }: { name: string, color: string, subtitle: string, rooms: string }) {
  const colors: Record<string, string> = {
    blue: 'bg-[#1E3A8A]',
    red: 'bg-[#FF5A5F]',
    black: 'bg-[#1f2937]',
    purple: 'bg-[#8B5CF6]',
    gold: 'bg-[#EAB308]'
  };

  return (
    <div className="flex flex-col justify-between border border-gray-200 rounded-[20px] p-5 bg-white flex-shrink-0 w-[220px] shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-14 h-14 rounded-2xl ${colors[color]} flex items-center justify-center text-white flex-shrink-0 shadow-sm`}>
          <Globe2 className="w-7 h-7" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[15px] font-bold text-boutique-navy leading-tight truncate">{name}</div>
          <div className={`text-[12px] font-bold mt-1 ${subtitle === 'Conectado' ? 'text-[#86D097]' : 'text-gray-400'}`}>{subtitle}</div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-[11px] font-bold text-gray-500">{rooms}</div>
        <div className={`w-2.5 h-2.5 rounded-full ${subtitle === 'Conectado' ? 'bg-[#86D097]' : 'bg-[#C2AF8B]'}`}></div>
      </div>
    </div>
  );
}
