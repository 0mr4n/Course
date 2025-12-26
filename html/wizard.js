import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Bot, MessageCircle, Instagram, Package, Zap, Mail, Boxes, Link2, Building2, Truck, Share2, Smartphone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Step4AutomationScale({ formData, setFormData, errors, language, t }) {
  const s = t?.step4 || {};
  const isRTL = language === 'ar';
  const productCount = formData.productCount || 0;

  const additionalAutomation = [
        { id: 'emailAutomation', label: s.emailAutomation || 'Email Automation', icon: Mail, description: s.emailAutomationDesc || 'Automatic messages for orders and abandoned carts' },
        { id: 'inventoryManagement', label: s.inventoryManagement || 'Automatic Inventory Management', icon: Boxes, description: s.inventoryManagementDesc || 'Auto-update inventory with alerts' },
        { id: 'none_automation', label: s.noneAutomation || 'None', icon: Zap, description: s.noneAutomationDesc || 'Skip this section' }
      ];

  const appInterfaces = [
        { id: 'mobileApp', label: s.mobileApp || 'iOS & Android App', icon: Smartphone, description: s.mobileAppDesc || 'Native mobile apps for iOS and Android' },
        { id: 'pwa', label: s.pwa || 'Progressive Web App (PWA)', icon: Globe, description: s.pwaDesc || 'Install as app from browser, works offline' },
        { id: 'none_app', label: s.noneApp || 'None', icon: Globe, description: s.noneAppDesc || 'Skip this section' }
      ];

  const integrations = [
        { id: 'erpIntegration', label: s.erpIntegration || 'ERP Integration', icon: Building2, description: s.erpIntegrationDesc || 'Integration with resource planning systems' },
        { id: 'shippingIntegration', label: s.shippingIntegration || 'Shipping Companies', icon: Truck, description: s.shippingIntegrationDesc || 'Connect with local and international shipping companies' },
        { id: 'socialIntegration', label: s.socialIntegration || 'Social Media Integration', icon: Share2, description: s.socialIntegrationDesc || 'Integration with Facebook, Instagram, WhatsApp' },
        { id: 'none_integration', label: s.noneIntegration || 'None', icon: Link2, description: s.noneIntegrationDesc || 'Skip this section' }
      ];

  const getProductCountLabel = (count) => {
    const productWord = s.products || 'Products';
    if (count === 0) return `0 ${productWord}`;
    if (count < 1000) return `${count} ${productWord}`;
    return `1000+ ${productWord}`;
  };

  const getProductCountColor = (count) => {
    if (count <= 50) return 'from-green-500 to-emerald-500';
    if (count <= 200) return 'from-blue-500 to-cyan-500';
    if (count <= 500) return 'from-purple-500 to-pink-500';
    return 'from-[#F15A24] to-red-500';
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } }
      }}
      className="space-y-8"
    >
      {/* Automation Header */}
      <motion.div variants={itemVariants} className="text-center pb-4 border-b border-[#222222]">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F15A24]/10 border border-[#F15A24]/30">
          <Bot className="w-5 h-5 text-[#F15A24]" />
          <span className="text-[#F15A24] font-medium">{s.automationTitle || 'Automation Features'}</span>
        </div>
        <p className="text-gray-500 text-sm mt-3">{s.automationDesc || 'Supercharge your store with automated messaging'}</p>
      </motion.div>

      {/* Instagram Automation - First in Arabic */}
                {isRTL && (
                  <motion.div variants={itemVariants} className="space-y-4">
                    <Label className="text-gray-300 flex items-center gap-2 text-base">
                      <Instagram className="w-5 h-5 text-pink-500" />
                      {s.instagram || 'Instagram Automation'}
                    </Label>
                    <p className="text-sm text-gray-500">{s.instagramDesc || 'Auto-respond to Instagram DMs and comments'}</p>

                    <RadioGroup
                      value={formData.instagramAutomation || ''}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, instagramAutomation: value }))}
                      className="grid grid-cols-2 gap-3"
                    >
                      <label
                        className={`relative flex items-center gap-3 p-3 md:p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.instagramAutomation === 'yes'
                            ? 'border-pink-500 bg-pink-500/10'
                            : 'border-[#333333] bg-[#1a1a1a] hover:border-[#444444]'
                        }`}
                      >
                        <RadioGroupItem value="yes" className="sr-only" />
                        <Zap className={`w-5 h-5 md:w-6 md:h-6 shrink-0 ${formData.instagramAutomation === 'yes' ? 'text-pink-500' : 'text-gray-500'}`} />
                        <div>
                          <span className="text-white font-semibold text-sm md:text-base">{s.yesEnable || 'Yes, Enable'}</span>
                          <span className="text-xs text-gray-500 block">{s.boostEngagement || 'Boost engagement'}</span>
                        </div>
                      </label>

                      <label
                        className={`relative flex items-center gap-3 p-3 md:p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.instagramAutomation === 'no'
                            ? 'border-gray-500 bg-gray-500/10'
                            : 'border-[#333333] bg-[#1a1a1a] hover:border-[#444444]'
                        }`}
                      >
                        <RadioGroupItem value="no" className="sr-only" />
                        <Instagram className={`w-5 h-5 md:w-6 md:h-6 shrink-0 ${formData.instagramAutomation === 'no' ? 'text-gray-400' : 'text-gray-500'}`} />
                        <div>
                          <span className="text-white font-semibold text-sm md:text-base">{s.noSkip || 'No, Skip'}</span>
                          <span className="text-xs text-gray-500 block">{s.manualReplies || 'Manual replies'}</span>
                        </div>
                      </label>
                    </RadioGroup>
                  </motion.div>
                )}

                {/* WhatsApp Automation - First in English, Second in Arabic */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <Label className="text-gray-300 flex items-center gap-2 text-base">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    {s.whatsapp || 'WhatsApp Automation'}
                  </Label>
                  <p className="text-sm text-gray-500">{s.whatsappDesc || 'Automatically respond to customer inquiries via WhatsApp'}</p>

                  <RadioGroup
                    value={formData.whatsappAutomation || ''}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, whatsappAutomation: value }))}
                    className="grid grid-cols-2 gap-3"
                  >
                    <label
                      className={`relative flex items-center gap-3 p-3 md:p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.whatsappAutomation === 'yes'
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-[#333333] bg-[#1a1a1a] hover:border-[#444444]'
                      }`}
                    >
                      <RadioGroupItem value="yes" className="sr-only" />
                      <Zap className={`w-5 h-5 md:w-6 md:h-6 shrink-0 ${formData.whatsappAutomation === 'yes' ? 'text-green-500' : 'text-gray-500'}`} />
                      <div>
                        <span className="text-white font-semibold text-sm md:text-base">{s.yesEnable || 'Yes, Enable'}</span>
                        <span className="text-xs text-gray-500 block">{s.recommended || 'Recommended'}</span>
                      </div>
                    </label>

                    <label
                      className={`relative flex items-center gap-3 p-3 md:p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.whatsappAutomation === 'no'
                          ? 'border-gray-500 bg-gray-500/10'
                          : 'border-[#333333] bg-[#1a1a1a] hover:border-[#444444]'
                      }`}
                    >
                      <RadioGroupItem value="no" className="sr-only" />
                      <MessageCircle className={`w-5 h-5 md:w-6 md:h-6 shrink-0 ${formData.whatsappAutomation === 'no' ? 'text-gray-400' : 'text-gray-500'}`} />
                      <div>
                        <span className="text-white font-semibold text-sm md:text-base">{s.noSkip || 'No, Skip'}</span>
                        <span className="text-xs text-gray-500 block">{s.manualReplies || 'Manual replies'}</span>
                      </div>
                    </label>
                  </RadioGroup>
                </motion.div>

                {/* Instagram Automation - Second in English */}
                {!isRTL && (
                  <motion.div variants={itemVariants} className="space-y-4">
                    <Label className="text-gray-300 flex items-center gap-2 text-base">
                      <Instagram className="w-5 h-5 text-pink-500" />
                      {s.instagram || 'Instagram Automation'}
                    </Label>
                    <p className="text-sm text-gray-500">{s.instagramDesc || 'Auto-respond to Instagram DMs and comments'}</p>

                    <RadioGroup
                      value={formData.instagramAutomation || ''}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, instagramAutomation: value }))}
                      className="grid grid-cols-2 gap-3"
                    >
                      <label
                        className={`relative flex items-center gap-3 p-3 md:p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.instagramAutomation === 'yes'
                            ? 'border-pink-500 bg-pink-500/10'
                            : 'border-[#333333] bg-[#1a1a1a] hover:border-[#444444]'
                        }`}
                      >
                        <RadioGroupItem value="yes" className="sr-only" />
                        <Zap className={`w-5 h-5 md:w-6 md:h-6 shrink-0 ${formData.instagramAutomation === 'yes' ? 'text-pink-500' : 'text-gray-500'}`} />
                        <div>
                          <span className="text-white font-semibold text-sm md:text-base">{s.yesEnable || 'Yes, Enable'}</span>
                          <span className="text-xs text-gray-500 block">{s.boostEngagement || 'Boost engagement'}</span>
                        </div>
                      </label>

                      <label
                        className={`relative flex items-center gap-3 p-3 md:p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.instagramAutomation === 'no'
                            ? 'border-gray-500 bg-gray-500/10'
                            : 'border-[#333333] bg-[#1a1a1a] hover:border-[#444444]'
                        }`}
                      >
                        <RadioGroupItem value="no" className="sr-only" />
                        <Instagram className={`w-5 h-5 md:w-6 md:h-6 shrink-0 ${formData.instagramAutomation === 'no' ? 'text-gray-400' : 'text-gray-500'}`} />
                        <div>
                          <span className="text-white font-semibold text-sm md:text-base">{s.noSkip || 'No, Skip'}</span>
                          <span className="text-xs text-gray-500 block">{s.manualReplies || 'Manual replies'}</span>
                        </div>
                      </label>
                    </RadioGroup>
                  </motion.div>
                )}

      {/* Additional Automation Features */}
      <motion.div variants={itemVariants} className="space-y-4">
        <Label className="text-gray-300 flex items-center gap-2 text-base">
          <Bot className="w-5 h-5 text-[#F15A24]" />
          {s.additionalAutomation || 'Choose the Right Features for Your Store'}
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalAutomation.map((item) => {
            const Icon = item.icon;
            const isChecked = formData.automationFeatures?.includes(item.id);
            return (
              <label
                key={item.id}
                className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  isChecked
                    ? 'border-[#F15A24] bg-[#F15A24]/10'
                    : 'border-[#333333] bg-[#1a1a1a] hover:border-[#444444]'
                }`}
              >
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={(checked) => {
                    setFormData(prev => ({
                      ...prev,
                      automationFeatures: checked
                        ? [...(prev.automationFeatures || []), item.id]
                        : (prev.automationFeatures || []).filter(f => f !== item.id)
                    }));
                  }}
                  className="mt-1 border-[#444444] data-[state=checked]:bg-[#F15A24] data-[state=checked]:border-[#F15A24]"
                />
                <Icon className={`w-5 h-5 mt-0.5 ${isChecked ? 'text-[#F15A24]' : 'text-gray-400'}`} />
                <div>
                  <span className="text-white font-medium block">{item.label}</span>
                  <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                </div>
              </label>
            );
          })}
        </div>
      </motion.div>

      {/* App Interface */}
      <motion.div variants={itemVariants} className="space-y-4">
        <Label className="text-gray-300 flex items-center gap-2 text-base">
          <Smartphone className="w-5 h-5 text-[#F15A24]" />
          {s.appInterfaceTitle || 'What App Interface Do You Wish to Have?'}
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appInterfaces.map((item) => {
            const Icon = item.icon;
            const isChecked = formData.automationFeatures?.includes(item.id);
            return (
              <label
                key={item.id}
                className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  isChecked
                    ? 'border-[#F15A24] bg-[#F15A24]/10'
                    : 'border-[#333333] bg-[#1a1a1a] hover:border-[#444444]'
                }`}
              >
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={(checked) => {
                    setFormData(prev => ({
                      ...prev,
                      automationFeatures: checked
                        ? [...(prev.automationFeatures || []), item.id]
                        : (prev.automationFeatures || []).filter(f => f !== item.id)
                    }));
                  }}
                  className="mt-1 border-[#444444] data-[state=checked]:bg-[#F15A24] data-[state=checked]:border-[#F15A24]"
                />
                <Icon className={`w-5 h-5 mt-0.5 ${isChecked ? 'text-[#F15A24]' : 'text-gray-400'}`} />
                <div>
                  <span className="text-white font-medium block">{item.label}</span>
                  <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                </div>
              </label>
            );
          })}
        </div>
      </motion.div>

      {/* Integrations */}
      <motion.div variants={itemVariants} className="space-y-4">
        <Label className="text-gray-300 flex items-center gap-2 text-base">
          <Link2 className="w-5 h-5 text-[#F15A24]" />
          {s.integrationsTitle || 'Integrations'}
        </Label>
        <p className="text-sm text-gray-500">{s.integrationsDesc || 'Choose the Right Features for Your Store'}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {integrations.map((item) => {
            const Icon = item.icon;
            const isChecked = formData.integrations?.includes(item.id);
            return (
              <label
                key={item.id}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center ${
                  isChecked
                    ? 'border-[#F15A24] bg-[#F15A24]/10'
                    : 'border-[#333333] bg-[#1a1a1a] hover:border-[#444444]'
                }`}
              >
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={(checked) => {
                    setFormData(prev => ({
                      ...prev,
                      integrations: checked
                        ? [...(prev.integrations || []), item.id]
                        : (prev.integrations || []).filter(f => f !== item.id)
                    }));
                  }}
                  className="border-[#444444] data-[state=checked]:bg-[#F15A24] data-[state=checked]:border-[#F15A24]"
                />
                <div className={`p-3 rounded-xl ${isChecked ? 'bg-[#F15A24]' : 'bg-[#222222]'}`}>
                  <Icon className={`w-6 h-6 ${isChecked ? 'text-white' : 'text-gray-400'}`} />
                </div>
                <div>
                  <span className="text-white font-medium block">{item.label}</span>
                  <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                </div>
              </label>
            );
          })}
        </div>
      </motion.div>

      {/* Product Count Slider */}
      <motion.div variants={itemVariants} className="space-y-6">
        <Label className="text-gray-300 flex items-center gap-2 text-base">
          <Package className="w-5 h-5 text-[#F15A24]" />
          {s.productCount || 'Expected Product Count'} *
        </Label>
        <p className="text-sm text-gray-500">{s.productCountDesc || 'How many products do you plan to list initially?'}</p>
        
        <div className="p-6 rounded-2xl bg-[#1a1a1a] border border-[#333333]">
          {/* Value Display */}
          <div className="text-center mb-8">
            <motion.div
              key={productCount}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${getProductCountColor(productCount)} text-white`}
            >
              <span className="text-2xl font-bold">{getProductCountLabel(productCount)}</span>
            </motion.div>
          </div>

          {/* Slider */}
          <div className="px-2">
            <Slider
              value={[productCount]}
              onValueChange={(value) => setFormData(prev => ({ ...prev, productCount: value[0] }))}
              max={1000}
              step={10}
              className="[&_[role=slider]]:bg-[#F15A24] [&_[role=slider]]:border-[#F15A24] [&_[role=slider]]:w-6 [&_[role=slider]]:h-6 [&_.relative]:bg-[#333333] [&_[data-orientation=horizontal]]:h-2 [&_[data-orientation=horizontal]>[data-orientation=horizontal]]:bg-gradient-to-r [&_[data-orientation=horizontal]>[data-orientation=horizontal]]:from-[#F15A24] [&_[data-orientation=horizontal]>[data-orientation=horizontal]]:to-[#FF7A4D]"
            />
          </div>

          {/* Scale markers */}
          <div className="flex justify-between mt-4 px-1">
            <span className="text-xs text-gray-500">0</span>
            <span className="text-xs text-gray-500">250</span>
            <span className="text-xs text-gray-500">500</span>
            <span className="text-xs text-gray-500">750</span>
            <span className="text-xs text-gray-500">1000+</span>
          </div>
          {errors.productCount && <p className="text-red-500 text-xs mt-2">{errors.productCount}</p>}
          </div>

          {/* Scale Recommendations */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#222222]">
            <span className="text-green-500 font-semibold">{s.small || 'Small'}</span>
            <p className="text-xs text-gray-500 mt-1">{s.smallRange || '1-50 items'}</p>
          </div>
          <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#222222]">
            <span className="text-blue-500 font-semibold">{s.medium || 'Medium'}</span>
            <p className="text-xs text-gray-500 mt-1">{s.mediumRange || '51-200 items'}</p>
          </div>
          <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#222222]">
            <span className="text-[#F15A24] font-semibold">{s.large || 'Large'}</span>
            <p className="text-xs text-gray-500 mt-1">{s.largeRange || '200+ items'}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}