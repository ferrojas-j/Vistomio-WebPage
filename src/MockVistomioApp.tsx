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
  ChevronLeft,
  ChevronRight,
  Home,
  User,
  BedDouble,
  CheckCircle2
} from 'lucide-react';

export default function MockVistomioApp({ t }: { t: any, lang?: string }) {
  return (
    <div className="w-full h-full flex bg-[#13203A] text-left text-boutique-navy font-sans p-3 md:p-5 gap-3 md:gap-5">
      
      {/* --- SIDEBAR --- */}
      <div className="w-[200px] lg:w-[280px] flex-shrink-0 bg-[#F4F1EA] flex flex-col overflow-hidden rounded-[16px] md:rounded-[20px] shadow-xl h-full">
        
        {/* Logo Area */}
        <div className="pt-6 pb-6 md:pt-8 md:pb-6 flex items-center justify-center gap-3 md:gap-4 bg-white rounded-t-[16px] md:rounded-t-[20px]">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-[12px] md:rounded-[16px] border-[1.5px] border-[#C6A15B] bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex-shrink-0 p-2 md:p-2.5">
            <img src="/logo-icon-transparent.png" alt="Vistomio Logo" className="w-full h-full object-contain opacity-90" />
          </div>
          <span className="font-bold tracking-[0.2em] md:tracking-[0.25em] text-[13px] md:text-[17px] text-boutique-navy leading-none mt-1" translate="no">VISTOMIO</span>
        </div>

        {/* Menu Items */}
        <div className="flex-1 px-2 md:px-4 py-4 md:py-5 space-y-1 md:space-y-2 overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden flex flex-col justify-start">
          <MenuItem icon={<LayoutDashboard className="w-4 h-4 md:w-5 md:h-5" />} label={t?.sidebar?.dashboard || 'Dashboard General'} />
          <MenuItem icon={<CalendarDays className="w-4 h-4 md:w-5 md:h-5" />} label={t?.sidebar?.bookingEngine || 'Motor de Reservas'} active />
          <MenuItem icon={<CreditCard className="w-4 h-4 md:w-5 md:h-5" />} label={t?.sidebar?.payments || 'Pagos y Facturación'} />
          <MenuItem icon={<UserCheck className="w-4 h-4 md:w-5 md:h-5" />} label={t?.sidebar?.checkin || 'Check-in y Gestión'} />
          <MenuItem icon={<Utensils className="w-4 h-4 md:w-5 md:h-5" />} label={t?.sidebar?.restaurant || 'Restaurante y Bar'} />
          <MenuItem icon={<ClipboardList className="w-4 h-4 md:w-5 md:h-5" />} label={t?.sidebar?.operations || 'Operaciones y Tareas'} />
          <MenuItem icon={<DollarSign className="text-sm md:text-lg" />} label={t?.sidebar?.finance || 'Administración y Finanzas'} />
          <MenuItem icon={<MessageSquareText className="w-4 h-4 md:w-5 md:h-5" />} label={t?.sidebar?.chatbot || 'Chatbot IA'} />
          <MenuItem icon={<BarChart2 className="w-4 h-4 md:w-5 md:h-5" />} label={t?.sidebar?.reports || 'Reportes y Analíticas'} />
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col overflow-hidden relative gap-3 md:gap-4 h-full">
        
        {/* CALENDAR WHITE CARD */}
        <div className="bg-white rounded-[16px] md:rounded-[24px] flex-[2] flex flex-col overflow-hidden shadow-xl min-h-0 shrink">
          
          {/* Top Header */}
          <div className="py-4 md:py-5 px-6 md:px-8 flex items-center justify-between bg-white flex-shrink-0">
            
            <h1 className="text-[18px] md:text-[24px] text-boutique-navy flex items-center gap-2 md:gap-3 font-serif font-normal whitespace-nowrap">
              <CalendarDays className="w-6 h-6 md:w-7 md:h-7 text-[#C6A15B]" />
              Calendario
            </h1>

            {/* Date Selectors & Navigation */}
            <div className="flex flex-row items-center gap-3 md:gap-4">
              <div className="flex gap-2 hidden lg:flex">
                <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-[11px] md:text-[13px] font-bold text-boutique-navy flex items-center gap-2 shadow-sm whitespace-nowrap">
                  Agosto <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-[11px] md:text-[13px] font-bold text-boutique-navy flex items-center gap-2 shadow-sm whitespace-nowrap">
                  2026 <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-full flex items-center shadow-sm">
                <button className="px-3 py-2 text-gray-400 hover:text-boutique-navy transition-colors"><ChevronLeft className="w-4 h-4" strokeWidth={3} /></button>
                <div className="px-3 py-2 text-[11px] md:text-[13px] font-bold text-boutique-navy tracking-widest text-[#2A75D3] whitespace-nowrap">HOY</div>
                <button className="px-3 py-2 text-gray-400 hover:text-boutique-navy transition-colors"><ChevronRight className="w-4 h-4" strokeWidth={3} /></button>
              </div>
            </div>

          </div>

          {/* GANTT CHART - 7 Days */}
          <div className="flex-1 flex flex-col border-t border-gray-100 overflow-hidden relative">
            {/* Header Row */}
            <div className="flex border-b border-gray-100 bg-white">
              <div className="w-[120px] md:w-[180px] flex-shrink-0 px-4 py-3 border-r border-gray-100 flex items-end">
                <span className="text-[10px] md:text-[12px] font-bold text-gray-400 tracking-widest uppercase">ROOM</span>
              </div>
              <div className="flex-1 grid grid-cols-7 relative">
                {['LUN 17', 'MAR 18', 'MIÉ 19', 'JUE 20', 'VIE 21', 'SÁB 22', 'DOM 23'].map((day: string, i: number) => (
                  <div key={i} className={`flex flex-col items-center justify-center py-2 md:py-3 border-r border-gray-100 ${i === 1 ? 'bg-[#FFF9E5]' : ''}`}>
                    <span className={`text-[11px] md:text-[13px] font-bold text-center leading-tight whitespace-nowrap ${i === 1 ? 'text-[#C6A15B]' : 'text-gray-500'}`}>
                      {day}
                    </span>
                    <span className={`text-[10px] md:text-[11px] mt-1 font-bold ${i === 1 ? 'text-[#C6A15B]' : 'text-[#86D097]'}`}>
                      {['75%', '75%', '88%', '50%', '63%', '75%', '88%'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Body (6 rows) */}
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
              
              <GanttRow name="Loft Terraza 02">
                   <BookingPill colStart={0} colSpan={2} color="green" icon="home" name="Sophia Garcia" />
                   <BookingPill colStart={2.2} colSpan={4.8} color="blue" icon="user" name="Olivia Johnson" />
              </GanttRow>

            </div>
          </div>
        </div>

        {/* CANALES CONECTADOS */}
        <div className="bg-white rounded-[12px] md:rounded-[16px] p-3 md:p-4 shadow-xl flex-shrink-0 flex flex-col overflow-hidden shrink-0 h-auto">
          <div className="flex items-center gap-2 mb-2 md:mb-3 px-1">
            <Globe className="w-4 h-4 text-boutique-navy" />
            <h3 className="text-sm md:text-base text-boutique-navy font-serif font-bold tracking-[0.02em] whitespace-nowrap">Canales Conectados</h3>
          </div>
          
          <div className="flex justify-between gap-2 md:gap-3 w-full overflow-hidden">
            <ChannelCard name="Booking" color="blue" subtitle="Conectado" rooms="8 Hab." />
            <ChannelCard name="Airbnb" color="red" subtitle="Conectado" rooms="6 Hab." />
            <ChannelCard name="Expedia" color="black" subtitle="Conectado" rooms="8 Hab." />
            <ChannelCard name="Web Directa" color="purple" subtitle="Conectado" rooms="8 Hab." className="hidden md:flex" />
            <ChannelCard name="Venta Directa" color="gold" subtitle="Manual" rooms="8 Hab." className="hidden xl:flex" />
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper Components
function MenuItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 md:gap-4 px-3 md:px-4 py-2.5 md:py-3.5 mx-2 md:mx-3 rounded-[10px] md:rounded-[14px] cursor-pointer transition-colors ${active ? 'bg-[#13203A] text-white shadow-[0_4px_12px_rgba(19,32,58,0.2)]' : 'text-gray-500 hover:bg-black/5 hover:text-boutique-navy'}`}>
      <div className={`${active ? 'text-white' : 'text-gray-400'} flex-shrink-0`}>{icon}</div>
      <span className={`text-[11px] md:text-[13px] leading-tight whitespace-normal ${active ? 'font-bold' : 'font-medium'}`}>{label}</span>
    </div>
  );
}

function DollarSign({ className }: { className?: string }) {
  return <div className={`font-bold font-sans ${className}`}>$</div>;
}

function GanttRow({ name, children }: { name: string, children: React.ReactNode }) {
  return (
    <div className="h-[44px] md:h-[52px] min-h-[44px] md:min-h-[52px] flex-shrink-0 relative flex border-b border-gray-100 group hover:bg-white transition-colors">
      <div className="w-[120px] md:w-[180px] flex-shrink-0 px-4 md:px-6 py-0 border-r border-gray-100 flex items-center bg-white">
        <span className="text-[11px] md:text-[13px] font-bold text-boutique-navy/90 truncate">{name}</span>
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
      className={`absolute h-7 md:h-9 rounded-[8px] md:rounded-[10px] flex items-center px-2 md:px-3 gap-2 shadow-sm ${bgColors[color]} text-white text-[10px] md:text-[11px] font-bold z-10 top-[8px] md:top-[8px] overflow-hidden hover:brightness-95 transition-all cursor-pointer`}
      style={{
        left: `calc(${(colStart / 7) * 100}% + 3px)`,
        width: `calc(${(colSpan / 7) * 100}% - 6px)`,
        minWidth: '24px'
      }}
    >
      <div className="hidden sm:flex w-4 h-4 md:w-5 md:h-5 rounded-[6px] items-center justify-center flex-shrink-0 bg-white/30">
         <IconCmp className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" strokeWidth={3} />
      </div>
      <span className="truncate flex-1">{name}</span>
      <div className="hidden sm:flex w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-white/20 items-center justify-center flex-shrink-0">
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
    <div className={`flex flex-col justify-between border border-gray-200 rounded-[8px] md:rounded-[12px] p-2 md:p-3 bg-white flex-1 min-w-[70px] md:min-w-[100px] shadow-sm ${className} shrink hover:border-gray-300 transition-colors cursor-pointer`}>
      <div className="flex flex-col xl:flex-row xl:items-center gap-2 mb-1.5 md:mb-2 overflow-hidden">
        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-[6px] md:rounded-[8px] ${colors[color]} flex items-center justify-center text-white flex-shrink-0 shadow-sm`}>
          <Globe2 className="w-3 h-3 md:w-4 md:h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] md:text-[13px] font-bold text-boutique-navy leading-tight whitespace-normal">{name}</div>
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
