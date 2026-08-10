import { useState } from 'react';
import { 
  Sparkles, Users, AlertTriangle, 
  CheckSquare, X, Box, Plus, 
  Info, ShieldAlert, DollarSign, ChevronRight
} from 'lucide-react';

type Language = 'es' | 'en' | 'fr';
type Tab = 'limpieza' | 'recepcion' | 'mantenimiento';
type BottomTab = 'staff' | 'inventory';
type InventoryArea = 'limpieza' | 'recepcion' | 'mantenimiento' | null;

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
      checkinToday: 'Check-in Hoy',
      checklistTitle: 'Checklist Estándar de Limpieza',
      checklist: [
        'Ventilar habitación (abrir ventanas)',
        'Sacar ropa de cama sucia y toallas',
        'Limpiar y desinfectar el baño (inodoro, ducha, lavamanos)',
        'Reponer amenities (jabón, shampoo, papel higiénico)',
        'Tender la cama con sábanas limpias y lisas',
        'Limpiar polvo de todos los muebles y superficies',
        'Aspirar alfombras o barrer y trapear el piso',
        'Verificar funcionamiento de luces, AC y TV',
        'Cerrar ventanas y perfumar habitación'
      ]
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
      },
      pettyCash: 'CAJA CHICA',
      recentExpenses: 'ÚLTIMOS GASTOS',
      expenses: [
        { title: 'Taxis Huésped H5', time: 'Hoy, 14:30', amount: '-$450', isPositive: false },
        { title: 'Compra Papelería', time: 'Hoy, 11:15', amount: '-$1,200', isPositive: false },
        { title: 'Fondo Inicial', time: 'Ayer, 08:00', amount: '+$5,000', isPositive: true }
      ],
      registerExpense: 'Registrar Gasto',
      amount: 'MONTO',
      amountPlaceholder: 'Ej: 500',
      type: 'TIPO',
      expenseType: 'Gasto (Egreso)',
      desc: 'DESCRIPCIÓN Y MOTIVO',
      descPlaceholder: 'Ej: Compra de café para huéspedes',
      registerBtn: 'Registrar en Caja Chica'
    },
    report: {
      title: 'Reportar Alerta',
      team: 'EQUIPO',
      teamOptions: ['Limpieza', 'Mantenimiento', 'Recepción'],
      location: 'LUGAR',
      locationPlaceholder: 'Ej: Habitación 102',
      finding: 'HALLAZGO',
      findingPlaceholder: 'Ej: Mancha en alfombra',
      submitBtn: 'Enviar Reporte Urgente'
    },
    novelty: {
      title: 'Nueva Novedad',
      type: 'TIPO DE NOVEDAD',
      typeOptions: ['Información', 'Incidente', 'Requerimiento', 'Otro'],
      detail: 'DETALLE',
      detailPlaceholder: 'Ej: Huésped 102 solicita taxi mañana a las 06:00',
      submitBtn: 'Registrar Novedad'
    },
    mantenimientoModals: {
      logbookTitle: 'Ingresar Avance a Bitácora',
      logbookDesc: 'DESCRIPCIÓN DEL TRABAJO REALIZADO',
      logbookDescPlaceholder: 'Ej: Se ha reparado el lavadero de H102, ya se puede usar nuevamente tras cambio de sifón.',
      logbookSubmit: 'Guardar Avance de Mantenimiento',
      suppliesTitle: 'Solicitar Recursos',
      suppliesItem: 'HERRAMIENTA O MATERIAL NECESARIO',
      suppliesItemPlaceholder: 'Ej: Silicona transparente, Tubo PVC 40mm...',
      suppliesQty: 'CANTIDAD',
      suppliesUrgency: 'URGENCIA',
      suppliesUrgencyOptions: ['Normal (Stock)', 'Urgente', 'Emergencia'],
      suppliesReason: 'MOTIVO O ÁREA',
      suppliesReasonPlaceholder: 'Ej: Reparación fuga baño Hab 205',
      suppliesSubmit: 'Enviar Solicitud al Jefe de Área'
    },
    inventorySelection: {
      title: 'Selecciona un Área',
      limpieza: 'Limpieza',
      limpiezaDesc: 'Actualizar insumos de limpieza',
      limpiezaDate: 'Última act. 08/08/2026 por Ana',
      recepcion: 'Recepción',
      recepcionDesc: 'Actualizar suministros de oficina',
      recepcionDate: 'Última act. 08/08/2026 por Carlos',
      mantenimiento: 'Mantenimiento',
      mantenimientoDesc: 'Actualizar repuestos y herramientas',
      mantenimientoDate: 'Última act. 07/08/2026 por Luis',
      modalTitle: 'Toma de Inventario',
      saveBtn: 'Guardar y Actualizar',
      itemsLimpieza: [
        { name: 'Desengrasante Industrial (L)', qty: '15' },
        { name: 'Bolsas de Basura (rollos)', qty: '50' },
        { name: 'Detergente Lavavajillas (L)', qty: '8' },
        { name: 'Limpiador Multiusos (L)', qty: '22' },
        { name: 'Cloro (L)', qty: '30' },
        { name: 'Esponjas de Fibra', qty: '45' }
      ],
      itemsRecepcion: [
        { name: 'Tarjetas Llave Magnéticas', qty: '150' },
        { name: 'Formularios Check-in impresos', qty: '400' },
        { name: 'Bolígrafos Corporativos', qty: '85' },
        { name: 'Sobres Membretados', qty: '320' },
        { name: 'Papel Bond A4 (resmas)', qty: '12' },
        { name: 'Caramelos Cortesía (kg)', qty: '2' }
      ],
      itemsMantenimiento: [
        { name: 'Filtros Campana Extractora', qty: '1' },
        { name: 'Termómetros de Cocina', qty: '3' },
        { name: 'Focos Infrarrojos', qty: '2' },
        { name: 'Juntas para Horno', qty: '4' },
        { name: 'Mangueras de Gas Reforzadas', qty: '6' },
        { name: 'Cuchillas para Licuadora Industrial', qty: '2' }
      ]
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
      checkinToday: 'Check-in Today',
      checklistTitle: 'Standard Cleaning Checklist',
      checklist: [
        'Ventilate room (open windows)',
        'Remove dirty bed linen and towels',
        'Clean and disinfect bathroom (toilet, shower, sink)',
        'Restock amenities (soap, shampoo, toilet paper)',
        'Make the bed with clean and smooth sheets',
        'Dust all furniture and surfaces',
        'Vacuum carpets or sweep and mop the floor',
        'Check lights, AC, and TV operation',
        'Close windows and perfume the room'
      ]
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
      },
      pettyCash: 'PETTY CASH',
      recentExpenses: 'LATEST EXPENSES',
      expenses: [
        { title: 'Taxis Guest Room 5', time: 'Today, 14:30', amount: '-$450', isPositive: false },
        { title: 'Office Supplies', time: 'Today, 11:15', amount: '-$1,200', isPositive: false },
        { title: 'Initial Fund', time: 'Yesterday, 08:00', amount: '+$5,000', isPositive: true }
      ],
      registerExpense: 'Register Expense',
      amount: 'AMOUNT',
      amountPlaceholder: 'Ex: 500',
      type: 'TYPE',
      expenseType: 'Expense',
      desc: 'DESCRIPTION AND REASON',
      descPlaceholder: 'Ex: Coffee purchase for guests',
      registerBtn: 'Register in Petty Cash'
    },
    report: {
      title: 'Report Alert',
      team: 'TEAM',
      teamOptions: ['Cleaning', 'Maintenance', 'Front Desk'],
      location: 'LOCATION',
      locationPlaceholder: 'Ex: Room 102',
      finding: 'FINDING',
      findingPlaceholder: 'Ex: Stain on carpet',
      submitBtn: 'Send Urgent Report'
    },
    novelty: {
      title: 'New Log',
      type: 'LOG TYPE',
      typeOptions: ['Information', 'Incident', 'Requirement', 'Other'],
      detail: 'DETAIL',
      detailPlaceholder: 'Ex: Guest 102 requests taxi tomorrow at 06:00',
      submitBtn: 'Register Log'
    },
    mantenimientoModals: {
      logbookTitle: 'Log Maintenance Progress',
      logbookDesc: 'DESCRIPTION OF WORK DONE',
      logbookDescPlaceholder: 'Ex: Fixed the sink in H102, ready to use after replacing siphon.',
      logbookSubmit: 'Save Maintenance Progress',
      suppliesTitle: 'Request Resources',
      suppliesItem: 'TOOL OR MATERIAL NEEDED',
      suppliesItemPlaceholder: 'Ex: Clear silicone, PVC pipe 40mm...',
      suppliesQty: 'QUANTITY',
      suppliesUrgency: 'URGENCY',
      suppliesUrgencyOptions: ['Normal (Stock)', 'Urgent', 'Emergency'],
      suppliesReason: 'REASON OR AREA',
      suppliesReasonPlaceholder: 'Ex: Leak repair in room 205 bathroom',
      suppliesSubmit: 'Send Request to Area Manager'
    },
    inventorySelection: {
      title: 'Select an Area',
      limpieza: 'Cleaning',
      limpiezaDesc: 'Update cleaning supplies',
      limpiezaDate: 'Last update 08/08/2026 by Ana',
      recepcion: 'Front Desk',
      recepcionDesc: 'Update office supplies',
      recepcionDate: 'Last update 08/08/2026 by Carlos',
      mantenimiento: 'Maintenance',
      mantenimientoDesc: 'Update tools and parts',
      mantenimientoDate: 'Last update 07/08/2026 by Luis',
      modalTitle: 'Inventory Check',
      saveBtn: 'Save and Update',
      itemsLimpieza: [
        { name: 'Industrial Degreaser (L)', qty: '15' },
        { name: 'Trash Bags (rolls)', qty: '50' },
        { name: 'Dishwasher Detergent (L)', qty: '8' },
        { name: 'All-Purpose Cleaner (L)', qty: '22' },
        { name: 'Bleach (L)', qty: '30' },
        { name: 'Fiber Sponges', qty: '45' }
      ],
      itemsRecepcion: [
        { name: 'Magnetic Key Cards', qty: '150' },
        { name: 'Printed Check-in Forms', qty: '400' },
        { name: 'Corporate Pens', qty: '85' },
        { name: 'Letterhead Envelopes', qty: '320' },
        { name: 'A4 Bond Paper (reams)', qty: '12' },
        { name: 'Courtesy Candies (kg)', qty: '2' }
      ],
      itemsMantenimiento: [
        { name: 'Extractor Hood Filters', qty: '1' },
        { name: 'Kitchen Thermometers', qty: '3' },
        { name: 'Infrared Bulbs', qty: '2' },
        { name: 'Oven Seals', qty: '4' },
        { name: 'Reinforced Gas Hoses', qty: '6' },
        { name: 'Industrial Blender Blades', qty: '2' }
      ]
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
      checkinToday: 'Check-in Auj.',
      checklistTitle: 'Checklist de Nettoyage Standard',
      checklist: [
        'Aérer la chambre (ouvrir les fenêtres)',
        'Enlever le linge de lit et les serviettes sales',
        'Nettoyer et désinfecter la salle de bain',
        'Réapprovisionner les produits (savon, shampoing)',
        'Faire le lit avec des draps propres',
        'Épousseter tous les meubles et surfaces',
        'Aspirer les tapis ou balayer et laver le sol',
        'Vérifier le fonctionnement des lumières, AC et TV',
        'Fermer les fenêtres et parfumer la chambre'
      ]
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
      },
      pettyCash: 'PETITE CAISSE',
      recentExpenses: 'DERNIÈRES DÉPENSES',
      expenses: [
        { title: 'Taxis Client Ch. 5', time: 'Auj, 14h30', amount: '-$450', isPositive: false },
        { title: 'Fournitures de bureau', time: 'Auj, 11h15', amount: '-$1,200', isPositive: false },
        { title: 'Fonds Initial', time: 'Hier, 08h00', amount: '+$5,000', isPositive: true }
      ],
      registerExpense: 'Enregistrer Dépense',
      amount: 'MONTANT',
      amountPlaceholder: 'Ex: 500',
      type: 'TYPE',
      expenseType: 'Dépense',
      desc: 'DESCRIPTION ET MOTIF',
      descPlaceholder: 'Ex: Achat de café pour clients',
      registerBtn: 'Enregistrer en Petite Caisse'
    },
    report: {
      title: 'Signaler Alerte',
      team: 'ÉQUIPE',
      teamOptions: ['Ménage', 'Maintenance', 'Réception'],
      location: 'LIEU',
      locationPlaceholder: 'Ex: Chambre 102',
      finding: 'DÉCOUVERTE',
      findingPlaceholder: 'Ex: Tache sur le tapis',
      submitBtn: 'Envoyer Rapport Urgent'
    },
    novelty: {
      title: 'Nouvelle Entrée',
      type: 'TYPE D\'ENTRÉE',
      typeOptions: ['Information', 'Incident', 'Exigence', 'Autre'],
      detail: 'DÉTAIL',
      detailPlaceholder: 'Ex: Client 102 demande un taxi demain à 06:00',
      submitBtn: 'Enregistrer Entrée'
    },
    mantenimientoModals: {
      logbookTitle: 'Saisir Progrès de Maintenance',
      logbookDesc: 'DESCRIPTION DU TRAVAIL RÉALISÉ',
      logbookDescPlaceholder: 'Ex: Réparé l\'évier H102, utilisable après remplacement du siphon.',
      logbookSubmit: 'Enregistrer Progrès de Maintenance',
      suppliesTitle: 'Demander des Ressources',
      suppliesItem: 'OUTIL OU MATÉRIEL NÉCESSAIRE',
      suppliesItemPlaceholder: 'Ex: Silicone transparent, Tube PVC 40mm...',
      suppliesQty: 'QUANTITÉ',
      suppliesUrgency: 'URGENCE',
      suppliesUrgencyOptions: ['Normal (Stock)', 'Urgent', 'Urgence'],
      suppliesReason: 'MOTIF OU ZONE',
      suppliesReasonPlaceholder: 'Ex: Réparation fuite salle de bain ch 205',
      suppliesSubmit: 'Envoyer Demande au Chef de Zone'
    },
    inventorySelection: {
      title: 'Sélectionner une Zone',
      limpieza: 'Ménage',
      limpiezaDesc: 'Mettre à jour les fournitures',
      limpiezaDate: 'Dernière MAJ 08/08/2026 par Ana',
      recepcion: 'Réception',
      recepcionDesc: 'Mettre à jour les fournitures de bureau',
      recepcionDate: 'Dernière MAJ 08/08/2026 par Carlos',
      mantenimiento: 'Maintenance',
      mantenimientoDesc: 'Mettre à jour outils et pièces',
      mantenimientoDate: 'Dernière MAJ 07/08/2026 par Luis',
      modalTitle: 'Relevé d\'Inventaire',
      saveBtn: 'Enregistrer et Mettre à jour',
      itemsLimpieza: [
        { name: 'Dégraissant Industriel (L)', qty: '15' },
        { name: 'Sacs Poubelle (rouleaux)', qty: '50' },
        { name: 'Détergent Lave-vaisselle (L)', qty: '8' },
        { name: 'Nettoyant Multi-usages (L)', qty: '22' },
        { name: 'Eau de Javel (L)', qty: '30' },
        { name: 'Éponges en Fibre', qty: '45' }
      ],
      itemsRecepcion: [
        { name: 'Cartes Clés Magnétiques', qty: '150' },
        { name: 'Formulaires Check-in Imprimés', qty: '400' },
        { name: 'Stylos d\'Entreprise', qty: '85' },
        { name: 'Enveloppes à En-tête', qty: '320' },
        { name: 'Papier A4 (rames)', qty: '12' },
        { name: 'Bonbons d\'Accueil (kg)', qty: '2' }
      ],
      itemsMantenimiento: [
        { name: 'Filtres Hotte Aspirante', qty: '1' },
        { name: 'Thermomètres de Cuisine', qty: '3' },
        { name: 'Ampoules Infrarouges', qty: '2' },
        { name: 'Joints de Four', qty: '4' },
        { name: 'Tuyaux de Gaz Renforcés', qty: '6' },
        { name: 'Lames de Mixeur Industriel', qty: '2' }
      ]
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

const LimpiezaView = ({ t, onOpenChecklist }: { t: any, onOpenChecklist: () => void }) => (
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
          <button onClick={onOpenChecklist} className="flex items-center gap-1.5 text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full text-[10px] font-black tracking-wide uppercase transition-transform active:scale-95 cursor-pointer hover:bg-indigo-100"><CheckSquare size={14} strokeWidth={2.5}/> {t.limpieza.viewChecklist}</button>
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

const RecepcionView = ({ t, onOpenExpense, onOpenNovelty }: { t: any, onOpenExpense: () => void, onOpenNovelty: () => void }) => (
  <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
    <button onClick={onOpenNovelty} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl p-4 shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 font-bold text-sm transition-transform active:scale-[0.98] cursor-pointer">
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
    
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm mt-2 overflow-hidden flex flex-col">
       <div className="p-5 flex justify-between items-center border-b border-slate-50">
         <div>
           <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t.recepcion.pettyCash}</h4>
           <p className="text-3xl font-black text-slate-800">$15,450</p>
         </div>
         <button onClick={onOpenExpense} className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center transition-transform active:scale-95 cursor-pointer hover:bg-emerald-100">
           <Plus size={20} strokeWidth={2.5}/>
         </button>
       </div>
       <div className="bg-slate-50/50 p-4 border-b border-slate-50">
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.recepcion.recentExpenses}</h4>
       </div>
       <div className="flex flex-col p-4 gap-4">
         {t.recepcion.expenses.map((expense: any, i: number) => (
           <div key={i} className="flex justify-between items-center">
             <div className="flex flex-col">
               <span className="font-bold text-sm text-slate-700">{expense.title}</span>
               <span className="text-[10px] text-slate-400">{expense.time}</span>
             </div>
             <span className={`font-bold text-sm ${expense.isPositive ? 'text-emerald-500' : 'text-slate-600'}`}>{expense.amount}</span>
           </div>
         ))}
       </div>
    </div>
  </div>
);

const MantenimientoView = ({ t, onOpenLogbook, onOpenSupplies }: { t: any, onOpenLogbook: () => void, onOpenSupplies: () => void }) => (
  <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
    <div className="grid grid-cols-2 gap-3">
      <button onClick={onOpenLogbook} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl p-4 shadow-md shadow-indigo-600/20 flex flex-col items-center justify-center gap-2 font-bold text-sm h-24 transition-transform active:scale-[0.98] cursor-pointer">
        <Plus size={20} /> {t.mantenimiento.advance}
      </button>
      <button onClick={onOpenSupplies} className="bg-amber-500 hover:bg-amber-600 text-white rounded-2xl p-4 shadow-md shadow-amber-500/20 flex flex-col items-center justify-center gap-2 font-bold text-sm h-24 transition-transform active:scale-[0.98] cursor-pointer">
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
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isNoveltyModalOpen, setIsNoveltyModalOpen] = useState(false);
  const [isLogbookModalOpen, setIsLogbookModalOpen] = useState(false);
  const [isSuppliesModalOpen, setIsSuppliesModalOpen] = useState(false);
  const [activeBottomTab, setActiveBottomTab] = useState<BottomTab>('staff');
  const [inventoryArea, setInventoryArea] = useState<InventoryArea>(null);
  const [isInventoryModalOpen, setIsInventoryModalOpen] = useState(false);
  const t = translations[currentLanguage];

  const inventoryItems = inventoryArea === 'limpieza' ? t.inventorySelection.itemsLimpieza : 
                         inventoryArea === 'recepcion' ? t.inventorySelection.itemsRecepcion : 
                         inventoryArea === 'mantenimiento' ? t.inventorySelection.itemsMantenimiento : [];
  const inventoryTitleName = inventoryArea === 'limpieza' ? t.inventorySelection.limpieza :
                             inventoryArea === 'recepcion' ? t.inventorySelection.recepcion :
                             inventoryArea === 'mantenimiento' ? t.inventorySelection.mantenimiento : '';

  
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
            <button onClick={() => setIsReportModalOpen(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-full text-xs font-bold transition-transform active:scale-95 cursor-pointer hover:bg-rose-100">
              <ShieldAlert size={14} /> Reportar
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 cursor-default">
              <X size={16} />
            </div>
          </div>
        </div>

        {/* Top Tabs */}
        {activeBottomTab === 'staff' && (
        <>
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
          {activeTab === 'limpieza' && <LimpiezaView t={t} onOpenChecklist={() => setIsChecklistOpen(true)} />}
          {activeTab === 'recepcion' && <RecepcionView t={t} onOpenExpense={() => setIsExpenseModalOpen(true)} onOpenNovelty={() => setIsNoveltyModalOpen(true)} />}
          {activeTab === 'mantenimiento' && <MantenimientoView t={t} onOpenLogbook={() => setIsLogbookModalOpen(true)} onOpenSupplies={() => setIsSuppliesModalOpen(true)} />}
        </div>
        </>
        )}

        {/* Inventory View */}
        {activeBottomTab === 'inventory' && (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300 h-full p-4">
            <h2 className="text-xl font-bold text-slate-800 mt-2">{t.inventorySelection.title}</h2>
            
            <div className="flex flex-col gap-4 mt-2">
              <div onClick={() => { setInventoryArea('limpieza'); setIsInventoryModalOpen(true); }} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors active:scale-[0.98]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                    <Sparkles size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-slate-800 text-lg leading-tight">{t.inventorySelection.limpieza}</h3>
                    <p className="text-xs text-slate-400 font-medium">{t.inventorySelection.limpiezaDesc}</p>
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded mt-1.5 w-fit">{t.inventorySelection.limpiezaDate}</span>
                  </div>
                </div>
                <ChevronRight className="text-slate-300" size={20}/>
              </div>

              <div onClick={() => { setInventoryArea('recepcion'); setIsInventoryModalOpen(true); }} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors active:scale-[0.98]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
                    <Users size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-slate-800 text-lg leading-tight">{t.inventorySelection.recepcion}</h3>
                    <p className="text-xs text-slate-400 font-medium">{t.inventorySelection.recepcionDesc}</p>
                    <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded mt-1.5 w-fit">{t.inventorySelection.recepcionDate}</span>
                  </div>
                </div>
                <ChevronRight className="text-slate-300" size={20}/>
              </div>

              <div onClick={() => { setInventoryArea('mantenimiento'); setIsInventoryModalOpen(true); }} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors active:scale-[0.98]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                    <Box size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-slate-800 text-lg leading-tight">{t.inventorySelection.mantenimiento}</h3>
                    <p className="text-xs text-slate-400 font-medium">{t.inventorySelection.mantenimientoDesc}</p>
                  </div>
                </div>
                <ChevronRight className="text-slate-300" size={20}/>
              </div>
            </div>
          </div>
        )}

        
        {/* Checklist Modal */}
        <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] z-30 transition-opacity duration-300 ${isChecklistOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsChecklistOpen(false)}>
          <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl transition-transform duration-300 ease-out p-6 shadow-2xl flex flex-col max-h-[85%] ${isChecklistOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-50 shrink-0">
              <h3 className="font-bold text-slate-800 text-lg pr-4 leading-tight">{t.limpieza.checklistTitle}</h3>
              <button onClick={() => setIsChecklistOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                <X size={20} />
              </button>
            </div>
            
            <div className="overflow-y-auto custom-scrollbar flex flex-col gap-5 pb-6">
              {t.limpieza.checklist.map((item: string, i: number) => (
                <label key={i} className="flex items-start gap-4 cursor-pointer group">
                  <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5 group-hover:border-indigo-400 transition-colors flex items-center justify-center bg-white">
                  </div>
                  <span className="text-sm text-slate-600 font-medium leading-snug">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        
        {/* Expense Modal */}
        <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] z-30 transition-opacity duration-300 ${isExpenseModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsExpenseModalOpen(false)}>
          <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl transition-transform duration-300 ease-out p-6 shadow-2xl flex flex-col ${isExpenseModalOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-5 pb-4 border-b border-slate-50 shrink-0">
              <h3 className="font-bold text-emerald-700 text-lg flex items-center gap-2"><DollarSign size={20}/> {t.recepcion.registerExpense}</h3>
              <button onClick={() => setIsExpenseModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col gap-5 pb-2">
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.recepcion.amount}</label>
                  <input type="text" placeholder={t.recepcion.amountPlaceholder} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" readOnly />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.recepcion.type}</label>
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:border-emerald-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_10px_center]">
                    <option>{t.recepcion.expenseType}</option>
                  </select>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.recepcion.desc}</label>
                <input type="text" placeholder={t.recepcion.descPlaceholder} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" readOnly />
              </div>
              
              <button onClick={() => setIsExpenseModalOpen(false)} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl transition-colors mt-2 active:scale-[0.98]">
                {t.recepcion.registerBtn}
              </button>
            </div>
          </div>
        </div>

        {/* Report Modal */}
        <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] z-30 transition-opacity duration-300 ${isReportModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsReportModalOpen(false)}>
          <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl transition-transform duration-300 ease-out p-6 shadow-2xl flex flex-col ${isReportModalOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-5 pb-4 border-b border-slate-50 shrink-0">
              <h3 className="font-bold text-rose-700 text-lg flex items-center gap-2"><AlertTriangle size={20}/> {t.report?.title || 'Reportar Alerta'}</h3>
              <button onClick={() => setIsReportModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col gap-5 pb-2">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.report?.team || 'EQUIPO'}</label>
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:border-rose-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_10px_center]">
                  {(t.report?.teamOptions || ['Limpieza']).map((opt: string, i: number) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.report?.location || 'LUGAR'}</label>
                <input type="text" placeholder={t.report?.locationPlaceholder || 'Ej: Habitación 102'} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500" readOnly />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.report?.finding || 'HALLAZGO'}</label>
                <input type="text" placeholder={t.report?.findingPlaceholder || 'Ej: Mancha en alfombra'} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500" readOnly />
              </div>
              
              <button onClick={() => setIsReportModalOpen(false)} className="w-full bg-[#D81E45] hover:bg-rose-700 text-white font-bold py-3.5 rounded-xl transition-colors mt-2 active:scale-[0.98]">
                {t.report?.submitBtn || 'Enviar Reporte Urgente'}
              </button>
            </div>
          </div>
        </div>

        {/* Novelty Modal */}
        <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] z-30 transition-opacity duration-300 ${isNoveltyModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsNoveltyModalOpen(false)}>
          <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl transition-transform duration-300 ease-out p-6 shadow-2xl flex flex-col ${isNoveltyModalOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-5 pb-4 border-b border-slate-50 shrink-0">
              <h3 className="font-bold text-indigo-700 text-lg flex items-center gap-2"><Plus size={20}/> {t.novelty?.title || 'Nueva Novedad'}</h3>
              <button onClick={() => setIsNoveltyModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col gap-5 pb-2">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.novelty?.type || 'TIPO DE NOVEDAD'}</label>
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:border-indigo-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_10px_center]">
                  {(t.novelty?.typeOptions || ['Información']).map((opt: string, i: number) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.novelty?.detail || 'DETALLE'}</label>
                <textarea placeholder={t.novelty?.detailPlaceholder || 'Ej: Huésped solicita despertar a las 06:00'} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none h-24" readOnly></textarea>
              </div>
              
              <button onClick={() => setIsNoveltyModalOpen(false)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-colors mt-2 active:scale-[0.98]">
                {t.novelty?.submitBtn || 'Registrar Novedad'}
              </button>
            </div>
          </div>
        </div>

        {/* Logbook Modal */}
        <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] z-30 transition-opacity duration-300 ${isLogbookModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsLogbookModalOpen(false)}>
          <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl transition-transform duration-300 ease-out p-6 shadow-2xl flex flex-col ${isLogbookModalOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-5 pb-4 border-b border-slate-50 shrink-0">
              <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2"><Plus size={20}/> {t.mantenimientoModals?.logbookTitle || 'Ingresar Avance a Bitácora'}</h3>
              <button onClick={() => setIsLogbookModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col gap-5 pb-2">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.mantenimientoModals?.logbookDesc || 'DESCRIPCIÓN DEL TRABAJO REALIZADO'}</label>
                <textarea placeholder={t.mantenimientoModals?.logbookDescPlaceholder || 'Ej: Se ha reparado...'} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 resize-none h-32" readOnly></textarea>
              </div>
              
              <button onClick={() => setIsLogbookModalOpen(false)} className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl transition-colors mt-2 active:scale-[0.98]">
                {t.mantenimientoModals?.logbookSubmit || 'Guardar Avance de Mantenimiento'}
              </button>
            </div>
          </div>
        </div>

        {/* Supplies Modal */}
        <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] z-30 transition-opacity duration-300 ${isSuppliesModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsSuppliesModalOpen(false)}>
          <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl transition-transform duration-300 ease-out p-6 shadow-2xl flex flex-col ${isSuppliesModalOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-5 pb-4 border-b border-slate-50 shrink-0">
              <h3 className="font-bold text-amber-700 text-lg flex items-center gap-2"><Box size={20}/> {t.mantenimientoModals?.suppliesTitle || 'Solicitar Recursos'}</h3>
              <button onClick={() => setIsSuppliesModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col gap-5 pb-2">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.mantenimientoModals?.suppliesItem || 'HERRAMIENTA O MATERIAL NECESARIO'}</label>
                <input type="text" placeholder={t.mantenimientoModals?.suppliesItemPlaceholder || 'Ej: Silicona transparente...'} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" readOnly />
              </div>
              
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 flex-[0.7]">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.mantenimientoModals?.suppliesQty || 'CANTIDAD'}</label>
                  <input type="text" defaultValue="1" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" readOnly />
                </div>
                <div className="flex flex-col gap-2 flex-[1.3]">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.mantenimientoModals?.suppliesUrgency || 'URGENCIA'}</label>
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:border-amber-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_10px_center]">
                    {(t.mantenimientoModals?.suppliesUrgencyOptions || ['Normal (Stock)']).map((opt: string, i: number) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.mantenimientoModals?.suppliesReason || 'MOTIVO O ÁREA'}</label>
                <input type="text" placeholder={t.mantenimientoModals?.suppliesReasonPlaceholder || 'Ej: Reparación fuga baño Hab 205'} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" readOnly />
              </div>
              
              <button onClick={() => setIsSuppliesModalOpen(false)} className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 rounded-xl transition-colors mt-2 active:scale-[0.98]">
                {t.mantenimientoModals?.suppliesSubmit || 'Enviar Solicitud al Jefe de Área'}
              </button>
            </div>
          </div>
        </div>


        {/* Inventory Modal */}
        <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] z-30 transition-opacity duration-300 ${isInventoryModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsInventoryModalOpen(false)}>
          <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl transition-transform duration-300 ease-out p-6 shadow-2xl flex flex-col h-[85%] ${isInventoryModalOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-5 pb-4 border-b border-slate-50 shrink-0">
              <h3 className="font-bold text-indigo-900 text-base flex items-center gap-2"><Box size={18}/> {t.inventorySelection?.modalTitle || 'Toma de Inventario'}: {inventoryTitleName}</h3>
              <button onClick={() => setIsInventoryModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col gap-3 overflow-y-auto pb-4 shrink">
              {inventoryItems.map((item: any, i: number) => (
                <div key={i} className="flex justify-between items-center bg-slate-50 border border-slate-100 rounded-xl p-4 gap-4">
                  <span className="font-bold text-sm text-slate-700 leading-tight">{item.name}</span>
                  <input type="text" defaultValue={item.qty} className="w-16 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-900 text-center focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 shadow-sm shrink-0" readOnly/>
                </div>
              ))}
            </div>
            
            <div className="pt-2 mt-auto">
              <button onClick={() => setIsInventoryModalOpen(false)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-colors active:scale-[0.98]">
                {t.inventorySelection?.saveBtn || 'Guardar y Actualizar'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="absolute bottom-0 w-full bg-white border-t border-slate-200 flex justify-around items-center py-4 px-6 z-20 pb-6 rounded-b-[2rem]">
          <button onClick={() => setActiveBottomTab('staff')} className={`flex flex-col items-center gap-1 cursor-pointer ${activeBottomTab === 'staff' ? 'text-indigo-600' : 'text-slate-400'}`}>
            <CheckSquare size={20} />
            <span className="text-[9px] font-bold tracking-wider uppercase">STAFF</span>
          </button>
          <button onClick={() => setActiveBottomTab('inventory')} className={`flex flex-col items-center gap-1 cursor-pointer ${activeBottomTab === 'inventory' ? 'text-indigo-600' : 'text-slate-400'}`}>
            <Box size={20} />
            <span className="text-[9px] font-bold tracking-wider uppercase">INVENTARIO</span>
          </button>
        </div>
      </div>
    </div>
  );
}
