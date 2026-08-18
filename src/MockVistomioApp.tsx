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
  
} from 'lucide-react';

export default function MockVistomioApp({ t }: { t: any, lang?: string }) {
  return (
    <div className="w-full h-full flex bg-[#13203A] text-left text-boutique-navy font-sans p-3 lg:p-5 gap-3 lg:gap-5">
      
      {/* --- SIDEBAR --- */}
      <div className="w-[180px] lg:w-[240px] flex-shrink-0 bg-[#F4F1EA] flex flex-col overflow-hidden rounded-[16px] lg:rounded-[24px] shadow-xl h-full">
        
        {/* Logo Area */}
        <div className="p-4 lg:p-6 flex items-center justify-center gap-2 lg:gap-3 mt-2 lg:mt-4 mb-2 lg:mb-4">
          <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-[10px] lg:rounded-2xl border-2 border-[#C6A15B] bg-white flex items-center justify-center text-[#C6A15B] font-bold text-2xl lg:text-3xl shadow-sm flex-shrink-0">
            V
          </div>
          <div className="flex flex-col" translate="no">
            <span className="font-black tracking-[0.2em] text-[11px] lg:text-sm text-boutique-navy leading-tight">VISTOMIO</span>
            <span className="font-extrabold tracking-[0.2em] text-[9px] lg:text-[11px] text-boutique-navy leading-tight">APP</span>
          </div>
        </div>

        {/* Menu Items (No User Widget) */}
        <div className="flex-1 py-2 lg:py-4 space-y-1 lg:space-y-2 overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden">
          <MenuItem icon={<LayoutDashboard className="w-4 h-4 lg:w-5 lg:h-5" />} label={t.sidebar?.dashboard || 'Dashboard'} />
          <MenuItem icon={<CalendarDays className="w-4 h-4 lg:w-5 lg:h-5" />} label={t.sidebar?.bookingEngine || 'Reservas'} active />
          <MenuItem icon={<CreditCard className="w-4 h-4 lg:w-5 lg:h-5" />} label={t.sidebar?.payments || 'Pagos'} />
          <MenuItem icon={<UserCheck className="w-4 h-4 lg:w-5 lg:h-5" />} label={t.sidebar?.checkin || 'Check-in'} />
          <MenuItem icon={<Utensils className="w-4 h-4 lg:w-5 lg:h-5" />} label={t.sidebar?.restaurant || 'Restaurante'} />
          <MenuItem icon={<ClipboardList className="w-4 h-4 lg:w-5 lg:h-5" />} label={t.sidebar?.operations || 'Operaciones'} />
          <MenuItem icon={<DollarSign className="text-base lg:text-xl" />} label={t.sidebar?.finance || 'Finanzas'} />
          <MenuItem icon={<MessageSquareText className="w-4 h-4 lg:w-5 lg:h-5" />} label={t.sidebar?.chatbot || 'Chatbot IA'} />
          <MenuItem icon={<BarChart2 className="w-4 h-4 lg:w-5 lg:h-5" />} label={t.sidebar?.reports || 'Reportes'} />
        </div>

        {/* Bottom Area (Language only, No "Contrata" Button as requested in previous iterations to clean it up, or wait, user only said "Elimina la parte de usuario") */}
        <div className="p-4 lg:p-5 mt-auto bg-[#F4F1EA] flex flex-col gap-2 lg:gap-3">
          <div className="flex items-center justify-between bg-white px-3 lg:px-4 py-2 lg:py-3 border border-gray-200 rounded-lg lg:rounded-xl shadow-sm cursor-pointer">
            <div className="flex items-center gap-2 text-xs lg:text-sm font-bold text-boutique-navy/90">
              <Globe className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-400" /> Español
            </div>
            <ChevronDown className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col overflow-hidden relative gap-3 lg:gap-5 h-full">
        
        {/* CALENDAR WHITE CARD */}
        <div className="bg-white rounded-[16px] lg:rounded-[24px] flex-1 flex flex-col overflow-hidden shadow-xl min-h-[300px]">
          
          {/* Top Header */}
          <div className="pt-3 lg:pt-5 pb-2 lg:pb-4 px-4 lg:px-6 flex flex-row items-center justify-between bg-white flex-shrink-0">
            
            {/* Left: Title & Toggle */}
            <div className="flex items-center gap-3 lg:gap-6">
              <h1 className="text-[16px] lg:text-[22px] text-boutique-navy flex items-center gap-2 lg:gap-3 font-serif font-normal tracking-[0.02em]">
                <CalendarDays className="w-5 h-5 lg:w-6 lg:h-6 text-[#C6A15B]" />
                <span className="hidden sm:inline">Calendario</span>
              </h1>

              {/* Hidden on very small mockups to prevent overlap */}
              <div className="hidden xl:flex items-center bg-gray-50 rounded-full p-1 border border-gray-200">
                <div className="bg-white px-4 py-1.5 rounded-full text-xs font-bold text-boutique-navy shadow-sm flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Reservas
                </div>
                <div className="px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 flex items-center gap-1.5">
                  <div className="font-bold font-sans text-sm">$</div> Tarifas
                </div>
              </div>
            </div>

            {/* Center: Date Selectors & Navigation (Using relative flex positioning instead of absolute to never overlap) */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2">
                <div className="bg-white border border-gray-200 rounded-full px-3 lg:px-5 py-1.5 lg:py-2 text-[10px] lg:text-sm font-bold text-boutique-navy flex items-center gap-1 lg:gap-2 shadow-sm">
                  Agosto <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" />
                </div>
                <div className="bg-white border border-gray-200 rounded-full px-3 lg:px-5 py-1.5 lg:py-2 text-[10px] lg:text-sm font-bold text-boutique-navy flex items-center gap-1 lg:gap-2 shadow-sm">
                  2026 <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" />
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-full flex items-center shadow-sm">
                <button className="px-2 lg:px-3 py-1 lg:py-1.5 text-gray-400 hover:text-boutique-navy"><ChevronLeft className="w-3 h-3 lg:w-4 lg:h-4" strokeWidth={3} /></button>
                <div className="px-2 lg:px-3 py-1 lg:py-1.5 text-[10px] lg:text-sm font-bold text-boutique-navy tracking-widest text-[#2A75D3]">HOY</div>
                <button className="px-2 lg:px-3 py-1 lg:py-1.5 text-gray-400 hover:text-boutique-navy"><ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" strokeWidth={3} /></button>
              </div>
            </div>

            {/* Right: Legend (Hidden on smaller viewports so it doesn't squish) */}
            <div className="hidden 2xl:flex items-center gap-4 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm text-[10px] font-bold tracking-widest text-gray-500 uppercase">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full border border-gray-300"></div> PAGADO</div>
              <div className="flex items-center gap-1 text-[#E68A8A]"><div className="w-2 h-2 rounded-full border border-[#E68A8A]"></div> POR PAGAR</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#98C2A0]"></div> EN CURSO</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#A6BCD7]"></div> CONFIRMADA</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#64748B]"></div> CHECK-OUT</div>
            </div>
          </div>

          {/* GANTT CHART - 7 Days to guarantee NO squishing and perfect fit */}
          <div className="flex-1 flex flex-col border-t border-gray-100 overflow-hidden relative">
            {/* Header Row */}
            <div className="flex border-b border-gray-100 bg-white">
              <div className="w-[100px] lg:w-[180px] flex-shrink-0 p-3 lg:p-4 border-r border-gray-100 flex items-end">
                <span className="text-[9px] lg:text-[11px] font-bold text-gray-400 tracking-widest uppercase">ROOM</span>
              </div>
              <div className="flex-1 grid grid-cols-7 relative">
                {['LUN 17', 'MAR 18', 'MIÉ 19', 'JUE 20', 'VIE 21', 'SÁB 22', 'DOM 23'].map((day: string, i: number) => (
                  <div key={i} className={`flex flex-col items-center justify-center py-2 lg:py-3 border-r border-gray-100 ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}>
                    <span className={`text-[10px] lg:text-sm font-bold text-center leading-tight ${i === 1 ? 'text-[#C6A15B]' : 'text-gray-500'}`}>
                      {day.split(' ')[0]} <br className="lg:hidden" /> <span className="hidden lg:inline"> </span> {day.split(' ')[1]}
                    </span>
                    <span className={`text-[9px] lg:text-xs mt-1 font-bold ${i === 1 ? 'text-[#C6A15B]' : 'text-[#86D097]'}`}>
                      {['75%', '75%', '88%', '50%', '63%', '75%', '88%'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Body */}
            <div className="flex-1 flex flex-col overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden">
              
              <GanttRow name="Suite Deluxe Terraza">
                   <BookingPill colStart={1} colSpan={2} color="green" icon="home" name="Ashley T..." />
                   <BookingPill colStart={3.2} colSpan={3.8} color="blue" icon="user" name="Paul Thompson" />
              </GanttRow>

              <GanttRow name="Suite Deluxe Jardín">
                   <BookingPill colStart={0} colSpan={3} color="green" icon="user" name="Emily Gonzalez" />
                   <BookingPill colStart={3.2} colSpan={3.8} color="blue" icon="user" name="Ashley A..." />
              </GanttRow>

              <GanttRow name="Habitación Deluxe 301">
                   <BookingPill colStart={0} colSpan={1.8} color="green" icon="home" name="Sophia T..." />
                   <BookingPill colStart={2.2} colSpan={1} color="blue" icon="user" name="C." />
                   <BookingPill colStart={3.5} colSpan={3.5} color="blue" icon="user" name="Robert Jones" />
              </GanttRow>

              <GanttRow name="Habitación Deluxe 302">
                   <BookingPill colStart={1.5} colSpan={4.5} color="blue" icon="user" name="Jane Jackson" />
                   <BookingPill colStart={6.2} colSpan={0.8} color="green" icon="home" name="N." />
              </GanttRow>

              <GanttRow name="Habitación Jardín 201">
                   <BookingPill colStart={0} colSpan={2} color="green" icon="home" name="Olivia Miller" />
                   <BookingPill colStart={2.2} colSpan={3.8} color="blue" icon="home" name="Jane Martinez" />
                   <BookingPill colStart={6.2} colSpan={0.8} color="green" icon="user" name="O." />
              </GanttRow>
              
              <GanttRow name="Loft Terraza 01">
                   <BookingPill colStart={0} colSpan={1.8} color="green" icon="home" name="Elias G..." />
                   <BookingPill colStart={2.2} colSpan={4.8} color="blue" icon="user" name="Thomas Jones" />
              </GanttRow>

              <GanttRow name="Loft Terraza 02">
                   <BookingPill colStart={0} colSpan={2} color="green" icon="home" name="Sophia Garcia" />
                   <BookingPill colStart={2.2} colSpan={4.8} color="blue" icon="user" name="Olivia Johnson" />
              </GanttRow>

            </div>
          </div>
        </div>

        {/* CANALES CONECTADOS */}
        <div className="bg-white rounded-[16px] lg:rounded-[24px] p-4 lg:p-6 shadow-xl flex-shrink-0 flex flex-col overflow-hidden">
          <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4 px-2">
            <Globe className="w-4 h-4 lg:w-5 lg:h-5 text-boutique-navy" />
            <h3 className="text-base lg:text-xl text-boutique-navy font-serif font-normal tracking-[0.03em]">Canales Conectados</h3>
          </div>
          
          {/* Responsive Flex grid for channels so they never squish */}
          <div className="flex justify-between gap-3 lg:gap-5 w-full">
            <ChannelCard name="Booking.com" color="blue" subtitle="Conectado" rooms="8 Hab." />
            <ChannelCard name="Airbnb" color="red" subtitle="Conectado" rooms="6 Hab." />
            <ChannelCard name="Expedia" color="black" subtitle="Conectado" rooms="8 Hab." />
            <ChannelCard name="Web Directa" color="purple" subtitle="Conectado" rooms="8 Hab." className="hidden md:flex" />
            <ChannelCard name="Venta Directa" color="gold" subtitle="Manual" rooms="8 Hab." className="hidden 2xl:flex" />
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper Components
function MenuItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 lg:gap-4 px-4 lg:px-6 py-2.5 lg:py-3.5 mx-2 lg:mx-4 rounded-xl cursor-pointer transition-colors ${active ? 'bg-[#13203A] text-white shadow-md' : 'text-gray-500 hover:bg-black/5'}`}>
      <div className={`${active ? 'text-white' : 'text-gray-400'} flex-shrink-0`}>{icon}</div>
      <span className={`text-[10px] lg:text-[13px] leading-tight truncate ${active ? 'font-bold' : 'font-semibold'}`}>{label}</span>
    </div>
  );
}

function DollarSign({ className }: { className?: string }) {
  return <div className={`font-bold font-sans ${className}`}>$</div>;
}

function GanttRow({ name, children }: { name: string, children: React.ReactNode }) {
  return (
    <div className="h-[48px] lg:h-[56px] min-h-[48px] lg:min-h-[56px] flex-shrink-0 relative flex border-b border-gray-100 group">
      <div className="w-[100px] lg:w-[180px] flex-shrink-0 px-3 lg:px-5 py-0 border-r border-gray-100 flex items-center">
        <span className="text-[10px] lg:text-[12px] font-bold text-boutique-navy/90 truncate">{name}</span>
      </div>
      <div className="flex-1 grid grid-cols-7 relative">
         {[...Array(7)].map((_, i) => <div key={i} className={`border-r border-gray-100 h-full ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}></div>)}
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
      className={`absolute h-8 lg:h-10 rounded-[8px] lg:rounded-xl flex items-center px-1.5 lg:px-3 gap-1.5 lg:gap-2 shadow-sm ${bgColors[color]} text-white text-[9px] lg:text-[11px] font-bold z-10 top-[8px] overflow-hidden`}
      style={{
        left: `calc(${(colStart / 7) * 100}% + 4px)`,
        width: `calc(${(colSpan / 7) * 100}% - 8px)`,
        minWidth: '32px'
      }}
    >
      <div className="hidden sm:flex w-4 h-4 lg:w-6 lg:h-6 rounded-md items-center justify-center flex-shrink-0 bg-white/30">
         <IconCmp className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 text-white" strokeWidth={3} />
      </div>
      <span className="truncate flex-1">{name}</span>
      <div className="hidden sm:flex w-3 h-3 lg:w-5 lg:h-5 rounded-full bg-white/20 items-center justify-center flex-shrink-0">
         <CheckCircle2 className="w-2 h-2 lg:w-3.5 lg:h-3.5 text-white" />
      </div>
    </div>
  );
}

function ChannelCard({ name, color, subtitle, rooms, className = '' }: { name: string, color: string, subtitle: string, rooms: string, className?: string }) {
  const colors: Record<string, string> = {
    blue: 'bg-[#1E3A8A]',
    red: 'bg-[#FF5A5F]',
    black: 'bg-[#1f2937]',
    purple: 'bg-[#8B5CF6]',
    gold: 'bg-[#EAB308]'
  };

  return (
    <div className={`flex flex-col justify-between border border-gray-200 rounded-[12px] lg:rounded-[20px] p-3 lg:p-4 bg-white flex-1 min-w-[100px] lg:min-w-[140px] shadow-sm ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
        <div className={`w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-2xl ${colors[color]} flex items-center justify-center text-white flex-shrink-0 shadow-sm`}>
          <Globe2 className="w-4 h-4 lg:w-6 lg:h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] lg:text-[14px] font-bold text-boutique-navy leading-tight truncate">{name}</div>
          <div className={`hidden lg:block text-[10px] lg:text-[11px] font-bold mt-0.5 ${subtitle === 'Conectado' ? 'text-[#86D097]' : 'text-gray-400'}`}>{subtitle}</div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-[9px] lg:text-[11px] font-bold text-gray-500 truncate">{rooms}</div>
        <div className={`w-2 h-2 flex-shrink-0 rounded-full ${subtitle === 'Conectado' ? 'bg-[#86D097]' : 'bg-[#C2AF8B]'}`}></div>
      </div>
    </div>
  );
}
