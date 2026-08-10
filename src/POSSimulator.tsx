import { useState } from 'react';
import { LayoutGrid, Receipt, Wallet, Briefcase, X, Shield, TrendingUp, Coins, Coffee, Plus } from 'lucide-react';

export default function POSSimulator({ t }: { t: any }) {
  const [activeTab, setActiveTab] = useState('tables');

  const { posDemo } = t;

  return (
    <div className="w-full max-w-[350px] mx-auto bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 relative shadow-emerald-500/20">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
      
      {/* Phone Screen */}
      <div className="w-full h-[700px] bg-slate-50 rounded-[2.5rem] overflow-hidden flex flex-col relative text-slate-800">
        
        {/* Header */}
        <div className="pt-10 px-6 pb-4 flex justify-between items-center bg-white border-b border-slate-100 z-10 shadow-sm relative">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {activeTab === 'tables' && posDemo.tabs.tables}
            {activeTab === 'orders' && posDemo.tabs.orders}
            {activeTab === 'expenses' && posDemo.tabs.expenses}
            {activeTab === 'admin' && posDemo.tabs.admin}
          </h2>
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
            <X size={16} />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto overflow-x-hidden bg-slate-50 pb-24 scrollbar-hide">
          
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
                {[
                  { id: 'M1', status: 'free' },
                  { id: 'M2', status: 'free' },
                  { id: 'M3', status: 'free' },
                  { id: 'M4', status: 'occupied' },
                  { id: 'M5', status: 'free' },
                  { id: 'M6', status: 'ready' },
                  { id: 'M7', status: 'free' },
                  { id: 'M8', status: 'occupied' },
                  { id: 'M9', status: 'free' },
                ].map((table) => (
                  <div key={table.id} className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 border-2 transition-transform active:scale-95 cursor-pointer
                    ${table.status === 'free' ? 'bg-white border-emerald-100' : ''}
                    ${table.status === 'occupied' ? 'bg-rose-50 border-rose-100' : ''}
                    ${table.status === 'ready' ? 'bg-indigo-50 border-indigo-100' : ''}
                  `}>
                    <span className={`text-xl font-bold
                      ${table.status === 'free' ? 'text-emerald-700' : ''}
                      ${table.status === 'occupied' ? 'text-rose-700' : ''}
                      ${table.status === 'ready' ? 'text-indigo-700' : ''}
                    `}>{table.id}</span>
                    <div className={`w-1.5 h-1.5 rounded-full
                      ${table.status === 'free' ? 'bg-emerald-400' : ''}
                      ${table.status === 'occupied' ? 'bg-rose-400' : ''}
                      ${table.status === 'ready' ? 'bg-indigo-400' : ''}
                    `}></div>
                  </div>
                ))}
              </div>

              {/* BARRA */}
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">{posDemo.tables.bar}</h4>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'B1', status: 'occupied' },
                  { id: 'B2', status: 'free' },
                  { id: 'B3', status: 'free' },
                ].map((table) => (
                  <div key={table.id} className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 border-2
                    ${table.status === 'free' ? 'bg-white border-emerald-100' : ''}
                    ${table.status === 'occupied' ? 'bg-rose-50 border-rose-100' : ''}
                  `}>
                    <span className={`text-xl font-bold
                      ${table.status === 'free' ? 'text-emerald-700' : ''}
                      ${table.status === 'occupied' ? 'text-rose-700' : ''}
                    `}>{table.id}</span>
                    <div className={`w-1.5 h-1.5 rounded-full
                      ${table.status === 'free' ? 'bg-emerald-400' : ''}
                      ${table.status === 'occupied' ? 'bg-rose-400' : ''}
                    `}></div>
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
                  <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                        ${order.status === posDemo.orders.open ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}
                      `}>
                        <Receipt size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Comanda #{order.id}</h4>
                        <p className="text-xs text-slate-400 font-medium">{order.loc} • {order.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
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
                      <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                        <Wallet size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm leading-tight">{item.name}</h4>
                        <p className="text-[10px] text-slate-400 font-bold tracking-wide uppercase mt-0.5">{item.category} • {times[idx]}</p>
                      </div>
                    </div>
                    <div className="font-black text-rose-600 text-sm">{amts[idx]}</div>
                  </div>
                )})}
              </div>

              <button className="w-full bg-rose-50 border-2 border-dashed border-rose-200 text-rose-600 font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 active:bg-rose-100 transition-colors">
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
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer active:bg-slate-50">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <Coffee size={20} className="text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-base">{posDemo.admin.menuEditor}</h4>
                    <p className="text-[11px] text-slate-400 font-semibold">{posDemo.admin.menuEditorDesc}</p>
                  </div>
                </div>
                <div className="text-slate-300 mr-2">›</div>
              </div>
            </div>
          )}
          
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-100 px-6 pt-3 pb-6 flex justify-between z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] rounded-b-[2.5rem]">
          <button 
            onClick={() => setActiveTab('tables')}
            className={`flex flex-col items-center gap-1.5 ${activeTab === 'tables' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <LayoutGrid size={22} className={activeTab === 'tables' ? 'fill-indigo-100' : ''} />
            <span className="text-[9px] font-bold uppercase tracking-wider">{posDemo.tabs.tables}</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('orders')}
            className={`flex flex-col items-center gap-1.5 ${activeTab === 'orders' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <Receipt size={22} className={activeTab === 'orders' ? 'fill-indigo-100' : ''} />
            <span className="text-[9px] font-bold uppercase tracking-wider">{posDemo.tabs.orders}</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('expenses')}
            className={`flex flex-col items-center gap-1.5 ${activeTab === 'expenses' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <Wallet size={22} className={activeTab === 'expenses' ? 'fill-indigo-100' : ''} />
            <span className="text-[9px] font-bold uppercase tracking-wider">{posDemo.tabs.expenses}</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('admin')}
            className={`flex flex-col items-center gap-1.5 ${activeTab === 'admin' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <Briefcase size={22} className={activeTab === 'admin' ? 'fill-indigo-100' : ''} />
            <span className="text-[9px] font-bold uppercase tracking-wider">{posDemo.tabs.admin}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
