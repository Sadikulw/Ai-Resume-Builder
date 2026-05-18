import React from "react";
import { Check, Zap } from "lucide-react";
const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: ["1 Resume", "Basic Templates", "PDF Download", "ATS Friendly"],
      button: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$9",
      description: "Best for job seekers",
      features: [
        "Unlimited Resumes",
        "Premium Templates",
        "AI Resume Generation",
        "Cover Letter Generator",
        "Priority Support",
      ],
      button: "Start Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$29",
      description: "For teams & agencies",
      features: [
        "Everything in Pro",
        "Team Access",
        "Advanced AI Features",
        "Custom Branding",
        "Dedicated Support",
      ],
      button: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div>
      <div className=" flex justify-center items-center">
        <div
          className="inline-flex items-center gap-2 
    bg-blue-100/70 border border-blue-200 
    text-blue-800 rounded-full 
    px-4 py-2 mb-20
    text-xs sm:text-sm font-medium 
    backdrop-blur-sm"
        >
          <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center">
            <Zap className="w-3 h-3 text-blue-700 fill-blue-700" />
          </div>

          <span>This Price is demo not working properly</span>
        </div>
      </div>
      <section className="w-full mb-15 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-blue-600 font-semibold mb-3">Pricing</p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Simple pricing for everyone
            </h2>

            <p className="text-slate-600 mt-5 text-lg">
              Build professional AI-powered resumes with flexible plans.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl border p-8 transition-all hover:-translate-y-1
              ${
                plan.popular
                  ? "bg-blue-600 text-white border-blue-600 shadow-2xl"
                  : "bg-white border-slate-200"
              }`}
              >
                {/* Badge */}
                {plan.popular && (
                  <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                    Most Popular
                  </span>
                )}

                <p
                  className={`font-semibold mb-4 ${
                    plan.popular ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </p>

                <div className="flex items-end gap-1">
                  <h3
                    className={`text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.price}
                  </h3>

                  <span
                    className={`mb-2 ${
                      plan.popular ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    /month
                  </span>
                </div>

                <p
                  className={`mt-4 ${
                    plan.popular ? "text-blue-100" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div
                        className={`p-1 rounded-full ${
                          plan.popular ? "bg-white/20" : "bg-blue-100"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 ${
                            plan.popular ? "text-white" : "text-blue-600"
                          }`}
                        />
                      </div>

                      <span
                        className={
                          plan.popular ? "text-white" : "text-slate-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`w-full mt-10 py-3 rounded-xl font-medium transition-all
                ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-slate-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
