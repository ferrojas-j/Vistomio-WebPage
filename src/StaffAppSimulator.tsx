import { useState } from 'react';
import { 
  Sparkles, Users, AlertTriangle, 
  CheckSquare, X, Box, Plus, 
  Info, ShieldAlert
} from 'lucide-react';

type Language = 'es' | 'en' | 'fr';
type Tab = 'limpieza' | 'recepcion' | 'mantenimiento';

interface StaffAppSimulatorProps {
  currentLanguage: Language;
}

const translations = {
  es: {
    tabs: {
      limpieza: 'Limpieza',
      recepcion: 'Recepción',
      mantenimiento: 'Mantenim.'
    },
    limpieza: {
      planning: 'Planning Diario',
      date: 'lunes, 10 de agosto',
      clean: 'Limpias',
      dirty: 'Sucias (Out)',
      guests: 'Huéspedes',
      available: 'Disponibles',
      assignments: 'Asignaciones',
      viewChecklist: 'Ver Checklist',
      floor1: 'María (Piso 1)',
      checkout: 'Checkout',
      checkinToday: 'Check-in Hoy'
    },
    recepcion: {
      newNovelty: 'Nueva Novedad de Recepción',
      logbook: 'Bitácora de novedades',
      date: 'Lun, 10 Ago',
      log1: {
        title: 'Llegada de huéspedes Hab 204. Dejan llaves de su Toyota Rav4 en recepción.',
        time: 'Hoy, 10:30 (Hace 10 min)'
      },
      log2: {
        title: 'Se recibe encomienda por Amazon para el Sr. Ruiz (Hab 105).',
        time: 'Hoy, 09:55 (Hace 45 min)'
      },
      log3: {
        title: 'Late checkout confirmado para Hab 301 hasta las 14:00 hrs. Cobro extra aplicado.',
        time: 'Hoy, 08:40 (Hace 2 horas)'
      },
      log4: {
        title: 'Huésped Hab 102 reporta pérdida de tarjeta. Se emite copia magnética.',
        time: 'Ayer, 21:00'
      }
    },
    mantenimiento: {
      advance: 'Avance Bitácora',
      supplies: 'Pedir Insumos',
      logbook: 'Bitácora de Mantenimiento',
      date: 'Lun, 10 Ago',
      log1: {
        title: 'Se ha reparado el lavadero, ya se puede usar nuevamente.',
        time: 'Hoy, 10:30 (Hace 20 min)'
      },
      log2: {
        title: 'Cambio de focos fundidos en recepción completado.',
        time: 'Hoy, 08:45 (Hace 2 horas)'
      },
      log3: {
        title: 'Revisión mensual de calderas en curso.',
        time: 'Hoy, 05:00 (Hace 5 horas)'
      },
      log4: {
        title: 'Pintura de fachada exterior finalizada exitosamente.',
        time: 'Ayer, 18:00 (lunes, 26 de julio)'
      }
    }
  },
  en: {
    tabs: {
      limpieza: 'Cleaning',
      recepcion: 'Front Desk',
      mantenimiento: 'Maint.'
    },
    limpieza: {
      planning: 'Daily Planning',
      date: 'Monday, August 10',
      clean: 'Clean',
      dirty: 'Dirty (Out)',
      guests: 'Guests',
      available: 'Available',
      assignments: 'Assignments',
      viewChecklist: 'View Checklist',
      floor1: 'Mary (Floor 1)',
      checkout: 'Checkout',
      checkinToday: 'Check-in Today'
    },
    recepcion: {
      newNovelty: 'New Front Desk Update',
      logbook: 'Activity Log',
      date: 'Mon, Aug 10',
      log1: {
        title: 'Guests in Room 204 arrived. Left Toyota Rav4 keys at front desk.',
        time: 'Today, 10:30 (10 min ago)'
      },
      log2: {
        title: 'Amazon package received for Mr. Ruiz (Room 105).',
        time: 'Today, 09:55 (45 min ago)'
      },
      log3: {
        title: 'Late checkout confirmed for Room 301 until 14:00. Extra charge applied.',
        time: 'Today, 08:40 (2 hours ago)'
      },
      log4: {
        title: 'Guest in Room 102 reported lost card. Magnetic copy issued.',
        time: 'Yesterday, 21:00'
      }
    },
    mantenimiento: {
      advance: 'Update Log',
      supplies: 'Order Supplies',
      logbook: 'Maintenance Log',
      date: 'Mon, Aug 10',
      log1: {
        title: 'Sink repaired, ready for use again.',
        time: 'Today, 10:30 (20 min ago)'
      },
      log2: {
        title: 'Burnt-out bulbs in front desk replaced.',
        time: 'Today, 08:45 (2 hours ago)'
      },
      log3: {
        title: 'Monthly boiler inspection in progress.',
        time: 'Today, 05:00 (5 hours ago)'
      },
      log4: {
        title: 'Exterior facade painting successfully completed.',
        time: 'Yesterday, 18:00 (Monday, July 26)'
      }
    }
  },
  fr: {
    tabs: {
      limpieza: 'Ménage',
      recepcion: 'Réception',
      mantenimiento: 'Maint.'
    },
    limpieza: {
      planning: 'Planning Quotidien',
      date: 'Lundi 10 août',
      clean: 'Propres',
      dirty: 'Sales (Out)',
      guests: 'Clients',
      available: 'Disponibles',
      assignments: 'Assignations',
      viewChecklist: 'Voir Checklist',
      floor1: 'Marie (Étage 1)',
      checkout: 'Checkout',
      checkinToday: 'Check-in Auj.'
    },
    recepcion: {
      newNovelty: 'Nouvelle Mise à Jour',
      logbook: 'Journal d\'Activité',
      date: 'Lun 10 Août',
      log1: {
        title: 'Arrivée des clients Ch. 204. Clés du Toyota Rav4 laissées à la réception.',
        time: 'Auj, 10h30 (il y a 10 min)'
      },
      log2: {
        title: 'Colis Amazon reçu pour M. Ruiz (Ch. 105).',
        time: 'Auj, 09h55 (il y a 45 min)'
      },
      log3: {
        title: 'Late checkout confirmé pour Ch. 301 jusqu\'à 14h00. Frais supp. appliqués.',
        time: 'Auj, 08h40 (il y a 2h)'
      },
      log4: {
        title: 'Client Ch. 102 signale perte de carte. Copie émise.',
        time: 'Hier, 21h00'
      }
    },
    mantenimiento: {
      advance: 'Mettre à jour',
      supplies: 'Commander',
      logbook: 'Journal de Maintenance',
      date: 'Lun 10 Août',
      log1: {
        title: 'Évier réparé, prêt à être utilisé à nouveau.',
        time: 'Auj, 10h30 (il y a 20 min)'
      },
      log2: {
        title: 'Ampoules grillées à la réception remplacées.',
        time: 'Auj, 08h45 (il y a 2h)'
      },
      log3: {
        title: 'Inspection mensuelle des chaudières en cours.',
        time: 'Auj, 05h00 (il y a 5h)'
      },
      log4: {
        title: 'Peinture de la façade extérieure terminée avec succès.',
        time: 'Hier, 18h00 (Lundi 26 juillet)'
      }
    }
  }
};

const LimpiezaView = ({ t }: { t: any }) => (
  <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
    <div className="bg-indigo-600 text-white rounded-2xl p-4 shadow-md shadow-indigo-600/20">
      <div className="text-[10px] font-bold uppercase tracking-wider mb-1 opacity-80">{t.limpieza.planning}</div>
      <div className="text-xl font-bold">{t.limpieza.date}</div>
    </div>
    
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-1">
        <span className="text-[10px] font-bold text-slate-500 uppercase">{t.limpieza.clean}</span>
        <span className="text-2xl font-black text-emerald-500">12</span>
      </div>
      <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-1">
        <span className="text-[10px] font-bold text-slate-500 uppercase">{t.limpieza.dirty}</span>
        <span className="text-2xl font-black text-rose-500">4</span>
      </div>
      <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-1">
        <span className="text-[10px] font-bold text-slate-500 uppercase">{t.limpieza.guests}</span>
        <span className="text-2xl font-black text-indigo-500">8</span>
      </div>
      <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-1">
        <span className="text-[10px] font-bold text-slate-500 uppercase">{t.limpieza.available}</span>
        <span className="text-2xl font-black text-amber-500">5</span>
      </div>
    </div>
    
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm mt-2 overflow-hidden flex flex-col">
       <div className="p-3 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t.limpieza.assignments}</span>
          <button className="flex items-center gap-1 text-indigo-600 bg-indigo-50 px-2 py-1 rounded text-[9px] font-bold uppercase"><CheckSquare size={12}/> {t.limpieza.viewChecklist}</button>
       </div>
       <div className="p-3">
         <div className="flex items-center gap-2 mb-3">
           <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">M</div>
           <span className="text-sm font-bold text-slate-700">{t.limpieza.floor1}</span>
         </div>
         
         <div className="flex flex-col gap-2">
           <div className="p-3 rounded-xl border border-slate-100 flex justify-between items-center bg-slate-50/50">
             <span className="font-bold text-sm text-slate-700">Hab 101</span>
             <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
           </div>
           
           <div className="p-3 rounded-xl border border-slate-100 flex justify-between items-center bg-slate-50/50">
             <div className="flex flex-col gap-1.5">
               <span className="font-bold text-sm text-slate-700">Hab 102</span>
               <div className="flex gap-1.5">
                 <span className="bg-rose-100 text-rose-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">{t.limpieza.checkout}</span>
                 <span className="bg-amber-100 text-amber-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">{t.limpieza.checkinToday}</span>
               </div>
             </div>
             <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
           </div>
         </div>
       </div>
    </div>
  </div>
);

const RecepcionView = ({ t }: { t: any }) => (
  <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
    <button className="w-full bg-indigo-600 text-white rounded-2xl p-4 shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 font-bold text-sm transition-transform active:scale-95 cursor-default">
      <Plus size={18} /> {t.recepcion.newNovelty}
    </button>
    
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm mt-2 overflow-hidden flex flex-col">
       <div className="p-3 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t.recepcion.logbook}</span>
          <span className="bg-indigo-50 text-indigo-600 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-widest">{t.recepcion.date}</span>
       </div>
       
       <div className="flex flex-col p-4 gap-6">
         {[t.recepcion.log1, t.recepcion.log2, t.recepcion.log3].map((log: any, i: number) => (
           <div key={i} className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-1"><Info size={16}/></div>
             <div className="flex flex-col gap-1">
               <p className="text-sm font-medium text-slate-700 leading-snug">{log.title}</p>
               <p className="text-xs text-slate-400">{log.time}</p>
             </div>
           </div>
         ))}
         <div className="flex gap-3">
           <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-1"><AlertTriangle size={16}/></div>
           <div className="flex flex-col gap-1">
             <p className="text-sm font-medium text-slate-700 leading-snug">{t.recepcion.log4.title}</p>
             <p className="text-xs text-slate-400">{t.recepcion.log4.time}</p>
           </div>
         </div>
       </div>
    </div>
  </div>
);

const MantenimientoView = ({ t }: { t: any }) => (
  <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
    <div className="grid grid-cols-2 gap-3">
      <button className="bg-indigo-600 text-white rounded-2xl p-4 shadow-md shadow-indigo-600/20 flex flex-col items-center justify-center gap-2 font-bold text-sm h-24 transition-transform active:scale-95 cursor-default">
        <Plus size={20} /> {t.mantenimiento.advance}
      </button>
      <button className="bg-amber-500 text-white rounded-2xl p-4 shadow-md shadow-amber-500/20 flex flex-col items-center justify-center gap-2 font-bold text-sm h-24 transition-transform active:scale-95 cursor-default">
        <Box size={20} /> {t.mantenimiento.supplies}
      </button>
    </div>
    
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm mt-2 overflow-hidden flex flex-col">
       <div className="p-3 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t.mantenimiento.logbook}</span>
          <span className="bg-indigo-50 text-indigo-600 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-widest">{t.mantenimiento.date}</span>
       </div>
       
       <div className="flex flex-col p-4 gap-6 relative">
         <div className="absolute left-[1.375rem] top-6 bottom-6 w-0.5 bg-slate-100 z-0"></div>

         {[t.mantenimiento.log1, t.mantenimiento.log2, t.mantenimiento.log3, t.mantenimiento.log4].map((log: any, i: number) => (
           <div key={i} className="flex gap-3 z-10">
             <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1.5 shrink-0 ml-[0.35rem] shadow-[0_0_0_4px_white]"></div>
             <div className="flex flex-col gap-1 ml-1">
               <p className="text-sm font-medium text-slate-700 leading-snug">{log.title}</p>
               <p className="text-xs text-slate-400">{log.time}</p>
             </div>
           </div>
         ))}
       </div>
    </div>
  </div>
);

export default function StaffAppSimulator({ currentLanguage }: StaffAppSimulatorProps) {
  const [activeTab, setActiveTab] = useState<Tab>('limpieza');
  const t = translations[currentLanguage];
  
  return (
    <div className="w-full max-w-[380px] mx-auto bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 relative shadow-indigo-500/20 shrink-0">
      {/* Phone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-50"></div>
      
      {/* App Container */}
      <div className="w-full h-[675px] bg-slate-50 rounded-[2.5rem] overflow-hidden flex flex-col relative font-sans">
        
        {/* Header */}
        <div className="pt-10 pb-4 px-5 bg-white flex items-center justify-between border-b border-slate-100 z-10 shrink-0">
          <h2 className="text-xl font-bold text-slate-800">App Personal</h2>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-full text-xs font-bold transition-transform active:scale-95 cursor-default">
              <ShieldAlert size={14} /> Reportar
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 cursor-default">
              <X size={16} />
            </div>
          </div>
        </div>

        {/* Top Tabs */}
        <div className="px-4 py-3 bg-white border-b border-slate-100 shrink-0">
          <div className="flex items-center justify-between gap-1">
            <button onClick={() => setActiveTab('limpieza')} className={`flex items-center justify-center gap-1.5 py-2 px-2 flex-1 rounded-xl text-[11px] font-bold transition-colors ${activeTab === 'limpieza' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <Sparkles size={14} /> {t.tabs.limpieza}
            </button>
            <button onClick={() => setActiveTab('recepcion')} className={`flex items-center justify-center gap-1.5 py-2 px-2 flex-1 rounded-xl text-[11px] font-bold transition-colors ${activeTab === 'recepcion' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <Users size={14} /> {t.tabs.recepcion}
            </button>
            <button onClick={() => setActiveTab('mantenimiento')} className={`flex items-center justify-center gap-1.5 py-2 px-2 flex-1 rounded-xl text-[11px] font-bold transition-colors ${activeTab === 'mantenimiento' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              <AlertTriangle size={14} /> {t.tabs.mantenimiento}
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-4 pb-24 custom-scrollbar">
          {activeTab === 'limpieza' && <LimpiezaView t={t} />}
          {activeTab === 'recepcion' && <RecepcionView t={t} />}
          {activeTab === 'mantenimiento' && <MantenimientoView t={t} />}
        </div>

        {/* Bottom Nav */}
        <div className="absolute bottom-0 w-full bg-white border-t border-slate-200 flex justify-around items-center py-4 px-6 z-20 pb-6 rounded-b-[2rem]">
          <button className="flex flex-col items-center gap-1 text-indigo-600 cursor-default">
            <CheckSquare size={20} />
            <span className="text-[9px] font-bold tracking-wider uppercase">STAFF</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 cursor-default">
            <Box size={20} />
            <span className="text-[9px] font-bold tracking-wider uppercase">INVENTARIO</span>
          </button>
        </div>
      </div>
    </div>
  );
}
