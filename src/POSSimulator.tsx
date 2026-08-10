import { useState } from 'react';
import { LayoutGrid, Receipt, Wallet, Briefcase, X, Shield, TrendingUp, Coins, Coffee, Plus, LogOut, Share2, Printer, ChevronLeft, CreditCard, Banknote, Check } from 'lucide-react';

export default function POSSimulator({ t }: { t: any }) {
  const [activeTab, setActiveTab] = useState('tables');
  const [showCloseShift, setShowCloseShift] = useState(false);
  const [showNewExpense, setShowNewExpense] = useState(false);
  const [showMenuEditor, setShowMenuEditor] = useState(false);
  
  // Table Interaction States
  const [activeTable, setActiveTable] = useState<string | null>(null);
  const [tableMode, setTableMode] = useState<'menu' | 'checkout'>('menu');
  const [menuTab, setMenuTab] = useState<'meats' | 'wines' | 'salads' | 'sides'>('wines');
  const [cart, setCart] = useState<{id: string, name: string, price: number, qty: number}[]>([]);
  const [tipPct, setTipPct] = useState<number | null>(15);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [showSuccess, setShowSuccess] = useState(false);

  // Tables state to show status updates
  const [tablesStatus, setTablesStatus] = useState<Record<string, string>>({
    'M1': 'free', 'M2': 'free', 'M3': 'free', 
    'M4': 'occupied', 'M5': 'free', 'M6': 'ready', 
    'M7': 'free', 'M8': 'occupied', 'M9': 'free',
    'B1': 'occupied', 'B2': 'free', 'B3': 'free', 
    'B4': 'ready', 'B5': 'free', 'B6': 'free',
    'DP-01': 'occupied', 'DP-02': 'free'
  });

  const { posDemo } = t;

  const handleTableClick = (id: string) => {
    setActiveTable(id);
    setTableMode('menu');
    setCart([]);
    setTipPct(15);
    setPaymentMethod('card');
  };

  const closeTable = () => {
    setActiveTable(null);
  };

  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tipAmount = tipPct ? (cartTotal * (tipPct / 100)) : 0;
  const grandTotal = cartTotal + tipAmount;

  const confirmPayment = () => {
    setShowSuccess(true);
    setTablesStatus(prev => ({ ...prev, [activeTable as string]: 'free' }));
    setTimeout(() => {
      setShowSuccess(false);
      setActiveTable(null);
    }, 1500);
  };

  const freeTable = () => {
    setTablesStatus(prev => ({ ...prev, [activeTable as string]: 'free' }));
    setActiveTable(null);
  };

  const tInt = posDemo.tableInteraction || {};
  const tCat = tInt.categories || {};
  const tItems = tInt.items || {};
  const tExpModal = posDemo.expenseModal || {};
  const tMenuEd = posDemo.menuEditor || {};

  const menuItems = {
    meats: [
      { id: 'ribeye', name: tItems.ribeye?.name || 'Ribeye Prime (400g)', price: tItems.ribeye?.price || 850 },
      { id: 'picana', name: tItems.picana?.name || 'Picaña (300g)', price: tItems.picana?.price || 650 }
    ],
    wines: [
      { id: 'malbec', name: tItems.malbec?.name || 'Malbec Reserva 2020', price: tItems.malbec?.price || 950 },
      { id: 'chardonnay', name: tItems.chardonnay?.name || 'Chardonnay', price: tItems.chardonnay?.price || 780 }
    ],
    salads: [],
    sides: []
  };

  return (
    <div className="w-full max-w-[380px] mx-auto bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 relative shadow-emerald-500/20">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
      
      {/* Phone Screen */}
      <div className="w-full h-[675px] bg-slate-50 rounded-[2.5rem] overflow-hidden flex flex-col relative text-slate-800">
        
        {/* Header */}
        <div className="pt-10 px-6 pb-4 flex justify-between items-center bg-white border-b border-slate-100 z-10 shadow-sm relative shrink-0">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {activeTab === 'tables' && posDemo.tabs.tables}
            {activeTab === 'orders' && posDemo.tabs.orders}
            {activeTab === 'expenses' && posDemo.tabs.expenses}
            {activeTab === 'admin' && posDemo.tabs.admin}
          </h2>
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer">
            <X size={16} />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto overflow-x-hidden bg-slate-50 pb-24 scrollbar-hide relative">
          
          {/* TAB: TABLES */}
          {activeTab === 'tables' && (
            <div className="p-4 animate-[fade-in_0.3s_ease-out]">
              {/* Status Legend */}
              <div className="flex justify-between items-center bg-white rounded-2xl p-4 shadow-sm mb-6 border border-slate-100">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{posDemo.tables.free}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{posDemo.tables.occupied}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{posDemo.tables.ready}</span>
                </div>
              </div>

              {/* SALON */}
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">{posDemo.tables.room}</h4>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9'].map((table) => (
                  <div key={table} onClick={() => handleTableClick(table)} className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 border-2 transition-transform active:scale-95 cursor-pointer
                    ${tablesStatus[table] === 'free' ? 'bg-white border-emerald-100' : ''}
                    ${tablesStatus[table] === 'occupied' ? 'bg-rose-50 border-rose-100' : ''}
                    ${tablesStatus[table] === 'ready' ? 'bg-indigo-50 border-indigo-100' : ''}
                  `}>
                    <span className={`text-xl font-bold
                      ${tablesStatus[table] === 'free' ? 'text-emerald-700' : ''}
                      ${tablesStatus[table] === 'occupied' ? 'text-rose-700' : ''}
                      ${tablesStatus[table] === 'ready' ? 'text-indigo-700' : ''}
                    `}>{table}</span>
                    <div className={`w-1.5 h-1.5 rounded-full
                      ${tablesStatus[table] === 'free' ? 'bg-emerald-400' : ''}
                      ${tablesStatus[table] === 'occupied' ? 'bg-rose-400' : ''}
                      ${tablesStatus[table] === 'ready' ? 'bg-indigo-400' : ''}
                    `}></div>
                  </div>
                ))}
              </div>

              {/* BARRA */}
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">{posDemo.tables.bar}</h4>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {['B1', 'B2', 'B3', 'B4', 'B5', 'B6'].map((table) => (
                  <div key={table} onClick={() => handleTableClick(table)} className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 border-2 transition-transform active:scale-95 cursor-pointer
                    ${tablesStatus[table] === 'free' ? 'bg-white border-emerald-100' : ''}
                    ${tablesStatus[table] === 'occupied' ? 'bg-rose-50 border-rose-100' : ''}
                    ${tablesStatus[table] === 'ready' ? 'bg-indigo-50 border-indigo-100' : ''}
                  `}>
                    <span className={`text-xl font-bold
                      ${tablesStatus[table] === 'free' ? 'text-emerald-700' : ''}
                      ${tablesStatus[table] === 'occupied' ? 'text-rose-700' : ''}
                      ${tablesStatus[table] === 'ready' ? 'text-indigo-700' : ''}
                    `}>{table}</span>
                    <div className={`w-1.5 h-1.5 rounded-full
                      ${tablesStatus[table] === 'free' ? 'bg-emerald-400' : ''}
                      ${tablesStatus[table] === 'occupied' ? 'bg-rose-400' : ''}
                      ${tablesStatus[table] === 'ready' ? 'bg-indigo-400' : ''}
                    `}></div>
                  </div>
                ))}
              </div>

              {/* DAYPASS */}
              <div className="flex justify-between items-end mb-3 px-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{posDemo.tables.daypass}</h4>
                <button className="text-[10px] font-bold text-indigo-600">{posDemo.tables.openTab}</button>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['DP-01', 'DP-02'].map((table, idx) => (
                  <div key={table} onClick={() => handleTableClick(table)} className={`py-4 rounded-2xl flex flex-col items-center justify-center gap-1 border-2 transition-transform active:scale-95 cursor-pointer
                    ${tablesStatus[table] === 'free' ? 'bg-white border-emerald-100' : ''}
                    ${tablesStatus[table] === 'occupied' ? 'bg-rose-50 border-rose-100' : ''}
                  `}>
                    <span className={`text-xl font-black tracking-tight
                      ${tablesStatus[table] === 'free' ? 'text-emerald-700' : ''}
                      ${tablesStatus[table] === 'occupied' ? 'text-rose-700' : ''}
                    `}>{table}</span>
                    <div className={`text-[9px] font-bold uppercase
                      ${tablesStatus[table] === 'free' ? 'text-emerald-500' : ''}
                      ${tablesStatus[table] === 'occupied' ? 'text-rose-500' : ''}
                    `}>{posDemo.tables.credit} {idx === 0 ? '$300' : '$500'}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: ORDERS */}
          {activeTab === 'orders' && (
            <div className="p-4 animate-[fade-in_0.3s_ease-out]">
              <div className="flex justify-between items-end mb-4 px-1">
                <h3 className="font-bold text-slate-800 text-lg">{posDemo.orders.recent}</h3>
                <span className="text-xs font-semibold text-slate-400">{posDemo.orders.today}</span>
              </div>
              
              <div className="flex flex-col gap-3">
                {[
                  { id: '1042', loc: `${posDemo.orders.table} 4`, time: '14:20', amt: '$1030.00', status: posDemo.orders.open },
                  { id: '1041', loc: `${posDemo.orders.bar} B2`, time: '14:15', amt: '$350.00', status: posDemo.orders.open },
                  { id: '1040', loc: `${posDemo.orders.table} 8`, time: '13:50', amt: '$390.00', status: posDemo.orders.closed },
                  { id: '1039', loc: `${posDemo.orders.daypass} 01`, time: '13:10', amt: '$250.00', status: posDemo.orders.closed },
                  { id: '1038', loc: `${posDemo.orders.table} 2`, time: '12:45', amt: '$1600.00', status: posDemo.orders.open },
                ].map((order, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex justify-between items-center cursor-pointer active:scale-95 transition-transform">
                    <div className="flex gap-3 items-center">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                        ${order.status === posDemo.orders.open ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}
                      `}>
                        <Receipt size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Comanda #{order.id}</h4>
                        <p className="text-xs text-slate-400 font-medium">{order.loc} • {order.time}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-black text-slate-800">{order.amt}</div>
                      <div className={`text-[9px] font-bold uppercase tracking-wider
                        ${order.status === posDemo.orders.open ? 'text-emerald-500' : 'text-slate-400'}
                      `}>{order.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: EXPENSES */}
          {activeTab === 'expenses' && (
            <div className="p-4 animate-[fade-in_0.3s_ease-out]">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] -z-0"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">{posDemo.expenses.pettyCash}</h3>
                      <p className="text-xs text-slate-400 font-semibold">{posDemo.expenses.date}</p>
                    </div>
                    <div className="bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                      {posDemo.expenses.inProgress}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold tracking-wide">
                    <Shield size={14} className="text-slate-400" />
                    {posDemo.expenses.auth}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{posDemo.expenses.initial}</div>
                  <div className="font-black text-slate-800 text-lg">$5,000.00</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border-t-4 border-t-emerald-400 border-x border-b border-x-slate-100 border-b-slate-100">
                  <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">{posDemo.expenses.current}</div>
                  <div className="font-black text-emerald-600 text-lg">$4,320.00</div>
                </div>
              </div>

              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">{posDemo.expenses.todayExpenses}</h4>
              
              <div className="flex flex-col gap-3 mb-4">
                {posDemo.expenses.items.map((item: any, idx: number) => {
                  const amts = ['-$350.00', '-$180.00', '-$150.00'];
                  const times = ['11:30', '13:15', '14:00'];
                  return (
                  <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                        <Wallet size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm leading-tight">{item.name}</h4>
                        <p className="text-[10px] text-slate-400 font-bold tracking-wide uppercase mt-0.5">{item.category} • {times[idx]}</p>
                      </div>
                    </div>
                    <div className="font-black text-rose-600 text-sm shrink-0">{amts[idx]}</div>
                  </div>
                )})}
              </div>

              <button onClick={() => setShowNewExpense(true)} className="w-full bg-rose-50 border-2 border-dashed border-rose-200 text-rose-600 font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 active:bg-rose-100 transition-colors">
                <Plus size={18} />
                {posDemo.expenses.addExpense}
              </button>
            </div>
          )}

          {/* TAB: ADMIN */}
          {activeTab === 'admin' && (
            <div className="p-4 animate-[fade-in_0.3s_ease-out]">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg leading-tight">{posDemo.admin.dashboard}</h3>
                    <p className="text-xs text-slate-400 font-semibold">{posDemo.expenses.date}</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    {posDemo.admin.activeShift}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold tracking-wide uppercase">
                  <Shield size={14} className="text-slate-400" />
                  {posDemo.admin.shift}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center mb-3">
                    <TrendingUp size={16} className="text-emerald-500" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{posDemo.admin.totalSales}</div>
                  <div className="font-black text-slate-800 text-lg">$14,250.00</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mb-3">
                    <Wallet size={16} className="text-rose-500" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{posDemo.admin.totalExpenses}</div>
                  <div className="font-black text-slate-800 text-lg">$680.00</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-6">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mb-3">
                  <Coins size={16} className="text-amber-500" />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{posDemo.admin.tips}</div>
                <div className="font-black text-slate-800 text-xl">$1,850.00</div>
              </div>

              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">{posDemo.admin.management}</h4>
              
              <div className="flex flex-col gap-3">
                <div onClick={() => setShowMenuEditor(true)} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer active:bg-slate-50 transition-colors">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                      <Coffee size={20} className="text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">{posDemo.admin.menuEditor}</h4>
                      <p className="text-[11px] text-slate-400 font-semibold leading-tight">{posDemo.admin.menuEditorDesc}</p>
                    </div>
                  </div>
                  <div className="text-slate-300 mr-2">›</div>
                </div>

                <div 
                  onClick={() => setShowCloseShift(true)}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer active:bg-slate-50 transition-colors"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                      <LogOut size={20} className="text-slate-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">{posDemo.admin.closeShift || 'Cerrar Jornada'}</h4>
                      <p className="text-[11px] text-slate-400 font-semibold leading-tight">{posDemo.admin.closeShiftDesc || 'Finalizar turno y hacer corte'}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}
          
          {/* MODAL: CORTE DE CAJA */}
          {showCloseShift && (
            <div className="absolute inset-0 bg-slate-900/60 z-30 flex flex-col justify-end animate-[fade-in_0.2s_ease-out]">
              <div className="bg-slate-50 w-full h-[90%] rounded-t-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-[slide-up_0.3s_ease-out]">
                
                <div className="w-full flex justify-center pt-4 pb-2 bg-white shrink-0">
                  <div className="w-12 h-1.5 bg-slate-200 rounded-full"></div>
                </div>

                <div className="text-center bg-white pb-4 shrink-0 shadow-sm relative z-10 border-b border-slate-100">
                  <h2 className="text-xl font-black text-slate-900">{posDemo.closeShiftModal?.title || 'Corte de Caja'}</h2>
                  <p className="text-xs font-semibold text-slate-400">{posDemo.closeShiftModal?.subtitle || 'Resumen de la jornada actual'}</p>
                </div>

                <div className="flex-grow overflow-y-auto p-4 scrollbar-hide bg-slate-50">
                  
                  {/* INGRESOS */}
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 overflow-hidden">
                    <div className="bg-slate-50/50 px-4 py-2 border-b border-slate-100">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{posDemo.closeShiftModal?.income || 'INGRESOS DEL DÍA'}</span>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-600">{posDemo.closeShiftModal?.cc || 'Tarjeta de crédito'}</span>
                        <span className="text-sm font-bold text-slate-800">$8,500.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-600">{posDemo.closeShiftModal?.transfer || 'Transferencia'}</span>
                        <span className="text-sm font-bold text-slate-800">$2,450.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-600">{posDemo.closeShiftModal?.cash || 'Efectivo'}</span>
                        <span className="text-sm font-bold text-slate-800">$3,300.00</span>
                      </div>
                      <div className="h-px w-full bg-slate-100 my-1"></div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-800">{posDemo.closeShiftModal?.totalIncome || 'Total Ingresos'}</span>
                        <span className="font-black text-emerald-600">$14,250.00</span>
                      </div>
                    </div>
                  </div>

                  {/* EGRESOS */}
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 overflow-hidden">
                    <div className="bg-slate-50/50 px-4 py-2 border-b border-slate-100">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{posDemo.closeShiftModal?.expenses || 'EGRESOS DEL DÍA'}</span>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-600">{posDemo.closeShiftModal?.pettyCash || 'Gastos menores'}</span>
                        <span className="text-sm font-bold text-slate-800">-$680.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-600">{posDemo.closeShiftModal?.providers || 'Proveedores'}</span>
                        <span className="text-sm font-bold text-slate-800">-$1,200.00</span>
                      </div>
                      <div className="h-px w-full bg-slate-100 my-1"></div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-800">{posDemo.closeShiftModal?.totalExpenses || 'Total Egresos'}</span>
                        <span className="font-black text-rose-600">-$1,880.00</span>
                      </div>
                    </div>
                  </div>

                  {/* BALANCE */}
                  <div className="bg-indigo-50 rounded-2xl shadow-sm border border-indigo-100 p-4 mb-4 flex justify-between items-center">
                    <span className="font-bold text-indigo-900">{posDemo.closeShiftModal?.balance || 'Balance Final'}</span>
                    <span className="font-black text-indigo-700 text-xl">$12,370.00</span>
                  </div>

                  {/* TIPS */}
                  <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-100 p-4 mb-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Coins size={16} className="text-amber-600" />
                      <span className="font-bold text-amber-900">{posDemo.closeShiftModal?.tips || 'Propinas del día'}</span>
                    </div>
                    <span className="font-black text-amber-700 text-lg">$1,850.00</span>
                  </div>

                  <div className="flex gap-3 mb-6">
                    <button className="flex-1 bg-white border border-slate-200 text-slate-700 font-bold py-3 rounded-xl flex items-center justify-center gap-2 active:bg-slate-50 transition-colors shadow-sm">
                      <Share2 size={16} />
                      {posDemo.closeShiftModal?.share || 'Compartir'}
                    </button>
                    <button className="flex-1 bg-white border border-slate-200 text-slate-700 font-bold py-3 rounded-xl flex items-center justify-center gap-2 active:bg-slate-50 transition-colors shadow-sm">
                      <Printer size={16} />
                      {posDemo.closeShiftModal?.print || 'Imprimir'}
                    </button>
                  </div>

                  <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-rose-500/20 mb-4">
                    <Shield size={18} />
                    {posDemo.closeShiftModal?.confirm || 'Confirmar Cierre'}
                  </button>
                  
                  <button 
                    onClick={() => setShowCloseShift(false)}
                    className="w-full bg-transparent text-slate-500 font-bold py-2 active:text-slate-700 transition-colors"
                  >
                    {posDemo.closeShiftModal?.cancel || 'Cancelar'}
                  </button>

                </div>
              </div>
            </div>
          )}

          {/* MODAL: NUEVO GASTO */}
          {showNewExpense && (
            <div className="absolute inset-0 bg-slate-900/60 z-30 flex flex-col justify-center px-4 animate-[fade-in_0.2s_ease-out]">
              <div className="bg-white w-full rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-[scale-in_0.3s_ease-out]">
                
                <div className="p-6 relative">
                  <button onClick={() => setShowNewExpense(false)} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                    <X size={20} />
                  </button>
                  
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center mb-4">
                    <Wallet size={24} className="text-rose-500" />
                  </div>
                  
                  <h2 className="text-xl font-black text-slate-900 mb-1">{tExpModal.title || 'Nuevo Gasto'}</h2>
                  <p className="text-xs font-medium text-slate-500 mb-6">{tExpModal.desc || 'Pago a proveedores e insumos.'}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">{tExpModal.amount || 'MONTO'}</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                        <input type="text" placeholder="0.00" className="w-full bg-slate-50 border border-slate-200 text-slate-800 font-bold rounded-xl pl-8 pr-4 py-3 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">{tExpModal.category || 'CATEGORÍA'}</label>
                      <select className="w-full bg-slate-50 border border-slate-200 text-slate-800 font-bold rounded-xl px-4 py-3 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all appearance-none">
                        <option>Insumos Cocina</option>
                        <option>Insumos Barra</option>
                        <option>Logística</option>
                        <option>Mantenimiento</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">{tExpModal.description || 'DESCRIPCIÓN'}</label>
                      <input type="text" placeholder={tExpModal.descPlaceholder || 'Ej: Verduras, Hielo, Detergente'} className="w-full bg-slate-50 border border-slate-200 text-slate-500 font-medium rounded-xl px-4 py-3 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all" />
                    </div>
                  </div>
                  
                  <button onClick={() => setShowNewExpense(false)} className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-rose-500/20 mt-6 cursor-pointer">
                    {tExpModal.saveBtn || 'Guardar Gasto'}
                  </button>
                </div>
                
              </div>
            </div>
          )}

          {/* VIEW: TABLE INTERACTION */}
          {activeTable && (
            <div className="absolute inset-0 bg-white z-40 flex flex-col animate-[fade-in_0.2s_ease-out]">
              
              {/* Header */}
              <div className="pt-10 px-4 pb-3 flex justify-between items-center bg-white border-b border-slate-100 shrink-0">
                <button onClick={tableMode === 'menu' ? closeTable : () => setTableMode('menu')} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">
                  <ChevronLeft size={20} />
                </button>
                <div className="text-center">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">{posDemo.orders?.table || 'Mesa'} {activeTable}</h2>
                  <div className={`text-[10px] font-bold uppercase tracking-wider ${tableMode === 'menu' ? 'text-emerald-500' : 'text-slate-400'}`}>
                    {tableMode === 'menu' ? tInt.serving || 'ATENDIENDO' : tInt.toCharge || 'A COBRAR'}
                  </div>
                </div>
                <button onClick={closeTable} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer">
                  <X size={16} />
                </button>
              </div>

              {/* MENU MODE */}
              {tableMode === 'menu' && (
                <div className="flex-grow overflow-y-auto flex flex-col pb-6 bg-slate-50">
                  {/* Category Pills */}
                  <div className="flex gap-2 overflow-x-auto p-4 scrollbar-hide bg-white border-b border-slate-100">
                    {['meats', 'wines', 'salads', 'sides'].map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setMenuTab(cat as any)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${menuTab === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                      >
                        {(tCat as any)[cat] || cat}
                      </button>
                    ))}
                  </div>

                  {/* Menu Items Grid */}
                  <div className="p-4 grid grid-cols-2 gap-3 shrink-0">
                    {(menuItems[menuTab as keyof typeof menuItems] || []).map((item, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => addToCart(item)}
                        className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm text-left active:scale-95 active:border-indigo-300 transition-all cursor-pointer hover:border-indigo-200 hover:shadow-md"
                      >
                        <div className="text-sm font-bold text-slate-800 leading-tight mb-2 h-10">{item.name}</div>
                        <div className="text-indigo-600 font-black">${item.price}</div>
                      </button>
                    ))}
                    {(menuItems[menuTab as keyof typeof menuItems] || []).length === 0 && (
                      <div className="col-span-2 py-8 text-center text-slate-400 text-sm font-medium">
                        No items in this category.
                      </div>
                    )}
                  </div>

                  {/* Current Bill */}
                  <div className="flex-grow bg-slate-50 px-4 pt-4 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">{tInt.currentBill || 'CUENTA ACTUAL'}</h4>
                    <div className="flex flex-col gap-2">
                      {cart.map((item, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center animate-[fade-in_0.2s_ease-out]">
                          <div>
                            <div className="text-sm font-bold text-slate-800">{item.name}</div>
                            <div className="text-xs text-slate-400 font-medium">${item.price} &times; {item.qty}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="font-black text-slate-900">${item.price * item.qty}</div>
                            <button onClick={() => removeFromCart(item.id)} className="w-6 h-6 rounded-md bg-rose-50 text-rose-500 flex items-center justify-center hover:bg-rose-100 transition-colors cursor-pointer">
                              <X size={12} />
                            </button>
                          </div>
                        </div>
                      ))}
                      {cart.length === 0 && (
                        <div className="text-center py-4 text-slate-400 text-sm">
                          Empty
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="bg-white p-4 pt-4 border-t border-slate-100 mt-auto shrink-0 shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-slate-500 font-medium">{tInt.total || 'Total'}</span>
                      <span className="text-3xl font-black text-emerald-600">${cartTotal}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => {
                          if (cartTotal > 0) setTableMode('checkout');
                        }}
                        className={`w-full font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm ${cartTotal > 0 ? 'bg-emerald-500 hover:bg-emerald-600 text-white active:scale-95 shadow-emerald-500/20 cursor-pointer' : 'bg-slate-100 text-slate-400'}`}
                      >
                        {tInt.chargeBtn || 'Cobrar'} &rsaquo;
                      </button>
                      <button onClick={freeTable} className="w-full bg-white border border-rose-200 text-rose-500 hover:bg-rose-50 font-bold py-3.5 rounded-xl flex items-center justify-center active:bg-rose-100 transition-colors cursor-pointer">
                        {tInt.freeTableBtn || 'Liberar Mesa'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* CHECKOUT MODE */}
              {tableMode === 'checkout' && (
                <div className="flex-grow overflow-y-auto flex flex-col pb-6 bg-slate-50 relative">
                  
                  {/* Success Overlay */}
                  {showSuccess && (
                    <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center animate-[fade-in_0.2s_ease-out]">
                      <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mb-4 animate-[bounce_0.5s_ease-out]">
                        <Check size={40} strokeWidth={3} />
                      </div>
                      <h3 className="text-2xl font-black text-slate-900">Success</h3>
                    </div>
                  )}

                  <div className="text-center py-8 bg-white border-b border-slate-100 shadow-sm shrink-0">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">{tInt.toCharge || 'A COBRAR'}</div>
                    <div className="text-5xl font-black text-slate-900">${grandTotal}</div>
                  </div>

                  <div className="p-4 flex flex-col gap-6 flex-grow">
                    
                    {/* Payment Method */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-3">{tInt.payment || 'Pago'}</h4>
                      <div className="flex gap-3">
                        <button 
                          onClick={() => setPaymentMethod('card')}
                          className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${paymentMethod === 'card' ? 'border-indigo-500 bg-indigo-50/50' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                        >
                          <CreditCard size={24} className={paymentMethod === 'card' ? 'text-indigo-600' : 'text-slate-400'} />
                          <span className={`text-sm font-bold ${paymentMethod === 'card' ? 'text-indigo-700' : 'text-slate-500'}`}>{tInt.card || 'Tarjeta'}</span>
                        </button>
                        <button 
                          onClick={() => setPaymentMethod('cash')}
                          className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${paymentMethod === 'cash' ? 'border-indigo-500 bg-indigo-50/50' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                        >
                          <Banknote size={24} className={paymentMethod === 'cash' ? 'text-indigo-600' : 'text-slate-400'} />
                          <span className={`text-sm font-bold ${paymentMethod === 'cash' ? 'text-indigo-700' : 'text-slate-500'}`}>{tInt.cash || 'Efectivo'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Tip */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-3">{tInt.tip || 'Propina'}</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {[10, 15, 20].map(pct => (
                          <button 
                            key={pct}
                            onClick={() => setTipPct(pct)}
                            className={`py-3 rounded-xl border-2 text-sm font-bold transition-all cursor-pointer ${tipPct === pct ? 'border-indigo-500 bg-indigo-50/50 text-indigo-700' : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'}`}
                          >
                            {pct}%
                          </button>
                        ))}
                        <button 
                          onClick={() => setTipPct(0)}
                          className={`py-3 rounded-xl border-2 text-sm font-bold transition-all cursor-pointer ${tipPct === 0 ? 'border-indigo-500 bg-indigo-50/50 text-indigo-700' : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'}`}
                        >
                          {tInt.noTip || 'No'}
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Confirm Footer */}
                  <div className="bg-white p-4 pt-4 border-t border-slate-100 mt-auto shrink-0 shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
                    <button 
                      onClick={confirmPayment}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-indigo-600/20 cursor-pointer"
                    >
                      <Check size={18} />
                      {tInt.confirmBtn || 'Confirmar'}
                    </button>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* VIEW: MENU EDITOR */}
          {showMenuEditor && (
            <div className="absolute inset-0 bg-slate-50 z-40 flex flex-col animate-[fade-in_0.2s_ease-out]">
              
              {/* Header */}
              <div className="pt-10 px-4 pb-4 flex items-center bg-white border-b border-slate-100 shrink-0">
                <button onClick={() => setShowMenuEditor(false)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer mr-4">
                  <ChevronLeft size={20} />
                </button>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">{tMenuEd.title || 'Editor de Menú'}</h2>
              </div>
              
              <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-4">
                
                {/* Meats Category */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 text-slate-700 font-bold">
                      <Coffee size={16} className="text-slate-400" />
                      {tMenuEd.meats || 'Carnes a la Parrilla'}
                    </div>
                    <button className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1.5 rounded-lg active:bg-amber-100 transition-colors">
                      {tMenuEd.addDish || '+ Add Dish'}
                    </button>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start border-b border-slate-50 pb-4">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">Ribeye Prime (400g)</h4>
                        <span className="inline-block text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wide">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1"></div>
                          {tMenuEd.available || 'DISPONIBLE'}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-slate-900 mb-2">$850</div>
                        <button className="text-slate-400 hover:text-rose-500 transition-colors"><X size={16} /></button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start border-b border-slate-50 pb-4">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">Tomahawk (800g)</h4>
                        <span className="inline-block text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full uppercase tracking-wide">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block mr-1"></div>
                          {tMenuEd.lowStock || 'POCAS UNIDADES'}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-slate-900 mb-2">$1600</div>
                        <button className="text-slate-400 hover:text-rose-500 transition-colors"><X size={16} /></button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">Picaña (300g)</h4>
                        <span className="inline-block text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wide">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1"></div>
                          {tMenuEd.available || 'DISPONIBLE'}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-slate-900 mb-2">$650</div>
                        <button className="text-slate-400 hover:text-rose-500 transition-colors"><X size={16} /></button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Wines Category */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 text-slate-700 font-bold">
                      <Coffee size={16} className="text-slate-400" />
                      {tMenuEd.wines || 'Vinos'}
                    </div>
                    <button className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1.5 rounded-lg active:bg-amber-100 transition-colors">
                      {tMenuEd.addDish || '+ Add Dish'}
                    </button>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start border-b border-slate-50 pb-4">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">Malbec Reserva 2020</h4>
                        <span className="inline-block text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wide">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1"></div>
                          {tMenuEd.available || 'DISPONIBLE'}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-slate-900 mb-2">$950</div>
                        <button className="text-slate-400 hover:text-rose-500 transition-colors"><X size={16} /></button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">Cabernet Sauvignon</h4>
                        <span className="inline-block text-[9px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full uppercase tracking-wide">
                          <div className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block mr-1"></div>
                          {tMenuEd.outOfStock || 'AGOTADO'}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-slate-900 mb-2">$820</div>
                        <button className="text-slate-400 hover:text-rose-500 transition-colors"><X size={16} /></button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          )}

        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-100 px-6 pt-3 pb-6 flex justify-between z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] rounded-b-[2.5rem]">
          <button 
            onClick={() => setActiveTab('tables')}
            className={`flex flex-col items-center gap-1.5 cursor-pointer ${activeTab === 'tables' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <LayoutGrid size={22} className={activeTab === 'tables' ? 'fill-indigo-100' : ''} />
            <span className="text-[9px] font-bold uppercase tracking-wider">{posDemo.tabs.tables}</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('orders')}
            className={`flex flex-col items-center gap-1.5 cursor-pointer ${activeTab === 'orders' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <Receipt size={22} className={activeTab === 'orders' ? 'fill-indigo-100' : ''} />
            <span className="text-[9px] font-bold uppercase tracking-wider">{posDemo.tabs.orders}</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('expenses')}
            className={`flex flex-col items-center gap-1.5 cursor-pointer ${activeTab === 'expenses' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <Wallet size={22} className={activeTab === 'expenses' ? 'fill-indigo-100' : ''} />
            <span className="text-[9px] font-bold uppercase tracking-wider">{posDemo.tabs.expenses}</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('admin')}
            className={`flex flex-col items-center gap-1.5 cursor-pointer ${activeTab === 'admin' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <Briefcase size={22} className={activeTab === 'admin' ? 'fill-indigo-100' : ''} />
            <span className="text-[9px] font-bold uppercase tracking-wider">{posDemo.tabs.admin}</span>
          </button>
        </div>

      </div>
    </div>
  );
}