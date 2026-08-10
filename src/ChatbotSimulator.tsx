import { useState } from 'react';
import { Send, Bot, Phone, Camera, MessageCircle, Globe } from 'lucide-react';

export default function ChatbotSimulator({ t }: { t: any }) {
  const [activeChannel, setActiveChannel] = useState<'whatsapp' | 'instagram' | 'messenger' | 'web'>('whatsapp');
  
  const { chatbotDemo } = t;
  
  const channels = [
    { id: 'whatsapp', name: 'WhatsApp', icon: Phone, color: 'bg-[#25D366]', textColor: 'text-[#25D366]', hoverBg: 'hover:bg-[#25D366]/10', activeBg: 'bg-[#25D366]/10', userBubble: 'bg-[#25D366] text-white', stats: '12,450' },
    { id: 'instagram', name: 'Instagram', icon: Camera, color: 'bg-[#E1306C]', textColor: 'text-[#E1306C]', hoverBg: 'hover:bg-[#E1306C]/10', activeBg: 'bg-[#E1306C]/10', userBubble: 'bg-[#E1306C] text-white', stats: '8,320' },
    { id: 'messenger', name: 'Facebook Messenger', icon: MessageCircle, color: 'bg-[#0084FF]', textColor: 'text-[#0084FF]', hoverBg: 'hover:bg-[#0084FF]/10', activeBg: 'bg-[#0084FF]/10', userBubble: 'bg-[#0084FF] text-white', stats: '4,100' },
    { id: 'web', name: 'Web Chat', icon: Globe, color: 'bg-[#7C3AED]', textColor: 'text-[#7C3AED]', hoverBg: 'hover:bg-[#7C3AED]/10', activeBg: 'bg-[#7C3AED]/10', userBubble: 'bg-[#7C3AED] text-white', stats: '15,890' }
  ];

  const currentChannel = channels.find(c => c.id === activeChannel)!;
  const messages = chatbotDemo.messages[activeChannel];

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-12 relative w-full">
      {/* Phone Simulator */}
      <div className="w-full max-w-[380px] mx-auto bg-[#1A1F2E] rounded-[3rem] p-3 shadow-2xl border-4 border-[#141824] relative shadow-indigo-500/20 z-10 shrink-0">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1A1F2E] rounded-b-2xl z-20"></div>
        
        {/* Phone Screen */}
        <div className="w-full h-[675px] bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden flex flex-col relative text-slate-800">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

          {/* Header */}
          <div className="pt-10 px-4 pb-3 flex items-center gap-3 bg-white border-b border-slate-100 z-10 shadow-sm relative shrink-0">
            <div className={`w-10 h-10 rounded-full ${currentChannel.color} flex items-center justify-center text-white shadow-md relative`}>
              <Bot size={20} />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 leading-tight">Chatbot Vistomio</h2>
              <div className={`flex items-center gap-1 text-[11px] font-bold ${currentChannel.textColor}`}>
                <currentChannel.icon size={10} />
                {currentChannel.name}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-grow overflow-y-auto p-4 scrollbar-hide flex flex-col gap-4 relative z-10 pb-20">
            {messages.map((msg: any, idx: number) => (
              <div key={idx} className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'} animate-[fade-in_0.3s_ease-out]`} style={{ animationFillMode: 'both', animationDelay: `${idx * 0.15}s` }}>
                <div className={`p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${msg.sender === 'user' ? `${currentChannel.userBubble} rounded-tr-sm` : 'bg-white text-slate-700 rounded-tl-sm border border-slate-100'}`}>
                  <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }} />
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="absolute bottom-0 left-0 w-full bg-transparent px-4 pb-6 pt-2 z-20">
            <div className="bg-white rounded-full border border-slate-200 p-1.5 pl-4 flex items-center justify-between shadow-lg shadow-slate-200/50">
              <span className="text-slate-400 text-sm font-medium">{chatbotDemo.messagePlaceholder || 'Mensaje'}</span>
              <div className={`w-8 h-8 rounded-full ${currentChannel.color} text-white flex items-center justify-center shadow-md`}>
                <Send size={14} className="-ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Channel Switcher (Right Side on Desktop, Bottom on Mobile) */}
      <div className="w-full max-w-[380px] xl:max-w-none xl:w-64 flex flex-col gap-3 relative z-10 shrink-0">
        <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 px-2 text-center xl:text-left">{chatbotDemo.switchChannel}</h4>
        {channels.map(channel => (
          <button 
            key={channel.id}
            onClick={() => setActiveChannel(channel.id as any)}
            className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 flex items-center gap-4 border ${activeChannel === channel.id ? `${channel.activeBg} border-transparent shadow-lg scale-105` : 'bg-slate-800/50 border-slate-700 hover:border-slate-600 backdrop-blur-md hover:scale-105'}`}
          >
            <div className={`w-10 h-10 rounded-xl ${channel.color} text-white flex items-center justify-center shrink-0 shadow-md`}>
              <channel.icon size={20} />
            </div>
            <div>
              <div className={`font-bold text-sm mb-0.5 ${activeChannel === channel.id ? channel.textColor : 'text-slate-300'}`}>{channel.name}</div>
              <div className="text-[11px] text-slate-500 font-semibold">{channel.stats} {chatbotDemo.interactions}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
