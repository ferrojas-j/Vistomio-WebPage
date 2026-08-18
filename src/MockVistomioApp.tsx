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
  CheckCircle2
} from 'lucide-react';

export default function MockVistomioApp({ t }: { t: any, lang?: string }) {
  return (
    <div className="w-full h-full flex bg-[#13203A] text-left text-boutique-navy font-sans p-2 md:p-4 gap-2 md:gap-4">
      
      {/* --- SIDEBAR --- */}
      <div className="w-[160px] md:w-[220px] flex-shrink-0 bg-[#F4F1EA] flex flex-col overflow-hidden rounded-[12px] md:rounded-[16px] shadow-xl h-full">
        
        {/* Logo Area */}
        <div className="p-4 md:p-5 flex items-center justify-center gap-3 border-b border-[#E8DFD0]/50 bg-white">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-[10px] md:rounded-[12px] border-2 border-[#C6A15B] bg-white flex items-center justify-center text-[#C6A15B] font-bold text-xl md:text-2xl shadow-sm flex-shrink-0">
            V
          </div>
          <div className="flex flex-col" translate="no">
            <span className="font-black tracking-[0.1em] text-[12px] md:text-[14px] text-boutique-navy leading-none">VISTOMIO</span>
            <span className="font-extrabold tracking-[0.1em] text-[9px] md:text-[10px] text-boutique-navy leading-none mt-1">APP</span>
          </div>
        </div>

        {/* Menu Items (Better distribution, not squished) */}
        <div className="flex-1 py-4 md:py-6 space-y-1 md:space-y-2 overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden flex flex-col">
          <MenuItem icon={<LayoutDashboard className="w-4 h-4 md:w-4.5 md:h-4.5" />} label={t.sidebar?.dashboard || 'Dashboard'} />
          <MenuItem icon={<CalendarDays className="w-4 h-4 md:w-4.5 md:h-4.5" />} label={t.sidebar?.bookingEngine || 'Reservas'} active />
          <MenuItem icon={<CreditCard className="w-4 h-4 md:w-4.5 md:h-4.5" />} label={t.sidebar?.payments || 'Pagos'} />
          <MenuItem icon={<UserCheck className="w-4 h-4 md:w-4.5 md:h-4.5" />} label={t.sidebar?.checkin || 'Check-in'} />
          <MenuItem icon={<Utensils className="w-4 h-4 md:w-4.5 md:h-4.5" />} label={t.sidebar?.restaurant || 'Restaurante'} />
          <MenuItem icon={<ClipboardList className="w-4 h-4 md:w-4.5 md:h-4.5" />} label={t.sidebar?.operations || 'Operaciones'} />
          <MenuItem icon={<DollarSign className="text-sm md:text-base" />} label={t.sidebar?.finance || 'Finanzas'} />
          <MenuItem icon={<MessageSquareText className="w-4 h-4 md:w-4.5 md:h-4.5" />} label={t.sidebar?.chatbot || 'Chatbot IA'} />
          <MenuItem icon={<BarChart2 className="w-4 h-4 md:w-4.5 md:h-4.5" />} label={t.sidebar?.reports || 'Reportes'} />
        </div>

        {/* Bottom Area (Language only) */}
        <div className="p-4 bg-[#E8DFD0]/30 border-t border-[#E8DFD0]/50 mt-auto">
          <div className="flex items-center justify-between bg-white px-3 py-2 border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-2 text-[11px] md:text-xs font-bold text-boutique-navy/90">
              <Globe className="w-3.5 h-3.5 text-gray-400" /> Español
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col overflow-hidden relative gap-2 md:gap-4 h-full">
        
        {/* CALENDAR WHITE CARD */}
        <div className="bg-white rounded-[12px] md:rounded-[16px] flex-1 flex flex-col overflow-hidden shadow-xl min-h-0 shrink">
          
          {/* Top Header (More space, flex-wrap to prevent clipping) */}
          <div className="py-4 md:py-5 px-4 md:px-6 flex flex-wrap items-center justify-between bg-white flex-shrink-0 gap-y-4 gap-x-6">
            
            {/* Left: Title & Toggle */}
            <div className="flex items-center gap-4">
              <h1 className="text-[16px] md:text-[20px] text-boutique-navy flex items-center gap-2 font-serif font-normal whitespace-nowrap">
                <CalendarDays className="w-5 h-5 md:w-6 md:h-6 text-[#C6A15B]" />
                <span className="hidden sm:inline">Calendario</span>
              </h1>

              {/* Toggle */}
              <div className="hidden lg:flex items-center bg-gray-50 rounded-full p-0.5 border border-gray-200">
                <div className="bg-white px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold text-boutique-navy shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                  <Calendar className="w-3.5 h-3.5" /> Reservas
                </div>
                <div className="px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold text-gray-500 flex items-center gap-1.5 whitespace-nowrap">
                  <div className="font-bold font-sans text-xs">$</div> Tarifas
                </div>
              </div>
            </div>

            {/* Center: Date Selectors & Navigation */}
            <div className="flex flex-row items-center gap-3">
              <div className="flex gap-2 hidden md:flex">
                <div className="bg-white border border-gray-200 rounded-full px-3 md:px-4 py-1.5 text-[10px] md:text-[12px] font-bold text-boutique-navy flex items-center gap-1.5 shadow-sm whitespace-nowrap cursor-pointer hover:bg-gray-50">
                  Agosto <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <div className="bg-white border border-gray-200 rounded-full px-3 md:px-4 py-1.5 text-[10px] md:text-[12px] font-bold text-boutique-navy flex items-center gap-1.5 shadow-sm whitespace-nowrap cursor-pointer hover:bg-gray-50">
                  2026 <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-full flex items-center shadow-sm">
                <button className="px-2 md:px-3 py-1.5 text-gray-400 hover:text-boutique-navy transition-colors"><ChevronLeft className="w-3.5 h-3.5" strokeWidth={3} /></button>
                <div className="px-2 md:px-3 py-1.5 text-[10px] md:text-[12px] font-bold text-boutique-navy tracking-widest text-[#2A75D3] whitespace-nowrap">HOY</div>
                <button className="px-2 md:px-3 py-1.5 text-gray-400 hover:text-boutique-navy transition-colors"><ChevronRight className="w-3.5 h-3.5" strokeWidth={3} /></button>
              </div>
            </div>

            {/* Right: Legend (Now flex-wrap to prevent cutting off) */}
            <div className="hidden xl:flex flex-wrap items-center justify-end gap-3 md:gap-4 bg-white border border-gray-200 rounded-full px-4 md:px-5 py-1.5 md:py-2 shadow-sm text-[8px] md:text-[9px] font-bold tracking-widest text-gray-500 uppercase ml-auto">
              <div className="flex items-center gap-1.5 whitespace-nowrap"><div className="w-2 h-2 rounded-full border border-gray-300"></div> PAGADO</div>
              <div className="flex items-center gap-1.5 text-[#E68A8A] whitespace-nowrap"><div className="w-2 h-2 rounded-full border border-[#E68A8A]"></div> POR PAGAR</div>
              <div className="flex items-center gap-1.5 whitespace-nowrap"><div className="w-2 h-2 rounded-full bg-[#98C2A0]"></div> EN CURSO</div>
              <div className="flex items-center gap-1.5 whitespace-nowrap"><div className="w-2 h-2 rounded-full bg-[#A6BCD7]"></div> CONFIRMADA</div>
            </div>
          </div>

          {/* GANTT CHART - 7 Days */}
          <div className="flex-1 flex flex-col border-t border-gray-100 overflow-hidden relative">
            {/* Header Row */}
            <div className="flex border-b border-gray-100 bg-white">
              <div className="w-[100px] md:w-[150px] flex-shrink-0 px-3 md:px-4 py-2 md:py-3 border-r border-gray-100 flex items-end">
                <span className="text-[9px] md:text-[10px] font-bold text-gray-400 tracking-widest uppercase">ROOM</span>
              </div>
              <div className="flex-1 grid grid-cols-7 relative">
                {['LUN 17', 'MAR 18', 'MIÉ 19', 'JUE 20', 'VIE 21', 'SÁB 22', 'DOM 23'].map((day: string, i: number) => (
                  <div key={i} className={`flex flex-col items-center justify-center py-2 md:py-3 border-r border-gray-100 ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}>
                    <span className={`text-[10px] md:text-[12px] font-bold text-center leading-tight whitespace-nowrap ${i === 1 ? 'text-[#C6A15B]' : 'text-gray-500'}`}>
                      {day}
                    </span>
                    <span className={`text-[9px] md:text-[10px] mt-1 font-bold ${i === 1 ? 'text-[#C6A15B]' : 'text-[#86D097]'}`}>
                      {['75%', '75%', '88%', '50%', '63%', '75%', '88%'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Body (5 rows) */}
            <div className="flex-1 flex flex-col overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden bg-gray-50/30">
              
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

              <GanttRow name="Habitación Jardín 201">
                   <BookingPill colStart={0} colSpan={2} color="green" icon="home" name="Olivia Miller" />
                   <BookingPill colStart={2.2} colSpan={3.8} color="blue" icon="home" name="Jane Martinez" />
              </GanttRow>
              
              <GanttRow name="Loft Terraza 01">
                   <BookingPill colStart={0} colSpan={1.8} color="green" icon="home" name="Elias G..." />
                   <BookingPill colStart={2.2} colSpan={4.8} color="blue" icon="user" name="Thomas Jones" />
              </GanttRow>

            </div>
          </div>
        </div>

        {/* CANALES CONECTADOS */}
        <div className="bg-white rounded-[12px] md:rounded-[16px] p-4 md:p-5 shadow-xl flex-shrink-0 flex flex-col overflow-hidden shrink-0 h-auto">
          <div className="flex items-center gap-2 mb-3 md:mb-4 px-1">
            <Globe className="w-4 h-4 md:w-5 md:h-5 text-boutique-navy" />
            <h3 className="text-sm md:text-base text-boutique-navy font-serif font-bold tracking-[0.02em] whitespace-nowrap">Canales Conectados</h3>
          </div>
          
          <div className="flex justify-between gap-3 w-full overflow-hidden">
            <ChannelCard name="Booking" color="blue" subtitle="Conectado" rooms="8 Hab." />
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
    <div className={`flex items-center gap-3 px-3 md:px-4 py-2 md:py-2.5 mx-2 md:mx-3 rounded-[10px] cursor-pointer transition-colors ${active ? 'bg-[#13203A] text-white shadow-md' : 'text-gray-500 hover:bg-black/5 hover:text-boutique-navy'}`}>
      <div className={`${active ? 'text-white' : 'text-gray-400'} flex-shrink-0`}>{icon}</div>
      <span className={`text-[10px] md:text-[12px] leading-tight truncate ${active ? 'font-bold' : 'font-semibold'}`}>{label}</span>
    </div>
  );
}

function DollarSign({ className }: { className?: string }) {
  return <div className={`font-bold font-sans ${className}`}>$</div>;
}

function GanttRow({ name, children }: { name: string, children: React.ReactNode }) {
  return (
    <div className="h-[44px] md:h-[54px] min-h-[44px] md:min-h-[54px] flex-shrink-0 relative flex border-b border-gray-100 group hover:bg-white transition-colors">
      <div className="w-[100px] md:w-[150px] flex-shrink-0 px-3 md:px-4 py-0 border-r border-gray-100 flex items-center bg-white">
        <span className="text-[10px] md:text-[12px] font-bold text-boutique-navy/90 truncate">{name}</span>
      </div>
      <div className="flex-1 grid grid-cols-7 relative">
         {[...Array(7)].map((_, i) => <div key={i} className={`border-r border-gray-100 h-full ${i === 1 ? 'bg-[#FFF9E5]/50 group-hover:bg-[#FFF9E5]' : ''}`}></div>)}
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
      className={`absolute h-7 md:h-9 rounded-[6px] md:rounded-[10px] flex items-center px-1.5 md:px-2.5 gap-1.5 md:gap-2 shadow-sm ${bgColors[color]} text-white text-[9px] md:text-[10px] font-bold z-10 top-[8px] md:top-[9px] overflow-hidden hover:brightness-95 transition-all cursor-pointer`}
      style={{
        left: `calc(${(colStart / 7) * 100}% + 2px)`,
        width: `calc(${(colSpan / 7) * 100}% - 4px)`,
        minWidth: '24px'
      }}
    >
      <div className="hidden sm:flex w-3.5 h-3.5 md:w-5 md:h-5 rounded-[4px] md:rounded-[6px] items-center justify-center flex-shrink-0 bg-white/30">
         <IconCmp className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" strokeWidth={3} />
      </div>
      <span className="truncate flex-1">{name}</span>
      <div className="hidden sm:flex w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/20 items-center justify-center flex-shrink-0">
         <CheckCircle2 className="w-2 h-2 md:w-2.5 md:h-2.5 text-white" />
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
    <div className={`flex flex-col justify-between border border-gray-200 rounded-[10px] md:rounded-[14px] p-2.5 md:p-4 bg-white flex-1 min-w-[70px] md:min-w-[100px] shadow-sm ${className} shrink hover:border-gray-300 transition-colors cursor-pointer`}>
      <div className="flex flex-col xl:flex-row xl:items-center gap-2 md:gap-3 mb-2 md:mb-3 overflow-hidden">
        <div className={`w-7 h-7 md:w-10 md:h-10 rounded-[8px] md:rounded-[10px] ${colors[color]} flex items-center justify-center text-white flex-shrink-0 shadow-sm`}>
          <Globe2 className="w-3.5 h-3.5 md:w-5 md:h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] md:text-[13px] font-bold text-boutique-navy leading-tight truncate">{name}</div>
          <div className={`hidden xl:block text-[9px] md:text-[10px] font-bold mt-0.5 ${subtitle === 'Conectado' ? 'text-[#86D097]' : 'text-gray-400'} truncate`}>{subtitle}</div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-[9px] md:text-[11px] font-bold text-gray-500 truncate">{rooms}</div>
        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 flex-shrink-0 rounded-full ${subtitle === 'Conectado' ? 'bg-[#86D097]' : 'bg-[#C2AF8B]'}`}></div>
      </div>
    </div>
  );
}
