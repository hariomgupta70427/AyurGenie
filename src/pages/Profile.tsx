import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { ArrowRight, Check, ExternalLink, Heart, Brain, Droplet, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  // Mock user data - in a real app, this would come from a database or API
  const userData = {
    name: "Alex Johnson",
    age: 32,
    gender: "Male",
    email: "alex.johnson@example.com",
    doshaProfile: {
      vata: 40,
      pitta: 35,
      kapha: 25
    },
    dnaTraits: {
      skinType: "Sensitive (Vata dominant)",
      hairType: "Dry, prone to breakage",
      stressLevel: "Moderate to high",
      metabolism: "Fast but irregular",
      sleepPattern: "Light sleeper, occasional insomnia"
    },
    healthConcerns: [
      "Occasional digestive issues",
      "Dry skin and hair",
      "Anxiety and stress management",
      "Energy fluctuations"
    ]
  };

  // Mock recommended products from TAC
  const recommendedProducts = [
    {
      id: 1,
      name: "Kumkumadi Brightening Ayurvedic Face Oil",
      description: "Balances Vata dosha, hydrates dry skin, and reduces fine lines",
      price: "₹595",
      image: "https://theayurvedaco.com/cdn/shop/files/705514810809-1.jpg?v=1709358780",
      link: "https://theayurvedaco.com/products/kumkumadi-face-oil-glowing-skin?_pos=1&_sid=ff05308ff&_ss=r"
    },
    {
      id: 2,
      name: "Onion Hair Regrowth Combo",
      description: "Strengthens hair roots, prevents breakage, and balances Vata",
      price: "₹679",
      image: "https://theayurvedaco.com/cdn/shop/files/Artboard1_355b4bd3-2548-4ae2-8180-6ec005a8bfc8.jpg?v=1699277489",
      link: "https://theayurvedaco.com/products/onion-shampoo-hair-oil-combo-hair-fall-control?_pos=3&_sid=0acc6f474&_ss=r"
    },
    {
      id: 3,
      name: "AyurJosh Shilajit Resin",
      description: "Boosts Immunity & Metabolism With Fulvic Acid & 84 Minerals",
      price: "₹1099",
      image: "https://theayurvedaco.com/cdn/shop/files/724049782276-1_845e6407-a27d-47af-96ef-cdb489571ef2.jpg?v=1708703065",
      link: "https://theayurvedaco.com/products/pure-and-natural-shilajit"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Ayurvedic <span className="gradient-text">Profile</span>
              </h1>
              <p className="text-white/70 max-w-3xl mx-auto text-lg">
                Your personalized Ayurvedic wellness journey based on your unique DNA and dosha profile.
              </p>
            </div>

            {/* User Profile Overview */}
            <div className="glass-panel rounded-xl p-8 mb-12 border border-ayur-blue/20">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-ayur-blue to-ayur-teal flex items-center justify-center text-4xl font-bold">
                  {userData.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{userData.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <span className="text-white/60 mr-2">Age:</span>
                      <span>{userData.age}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white/60 mr-2">Gender:</span>
                      <span>{userData.gender}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white/60 mr-2">Email:</span>
                      <span>{userData.email}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">Your Dosha Profile</h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-ayur-blue font-medium">Vata</span>
                        <span>{userData.doshaProfile.vata}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-ayur-blue h-2 rounded-full" style={{ width: `${userData.doshaProfile.vata}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-ayur-teal font-medium">Pitta</span>
                        <span>{userData.doshaProfile.pitta}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-ayur-teal h-2 rounded-full" style={{ width: `${userData.doshaProfile.pitta}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-ayur-gold font-medium">Kapha</span>
                        <span>{userData.doshaProfile.kapha}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-ayur-gold h-2 rounded-full" style={{ width: `${userData.doshaProfile.kapha}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DNA-Based Traits */}
            <div className="glass-panel rounded-xl p-8 mb-12 border border-ayur-teal/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Droplet className="w-6 h-6 mr-2 text-ayur-teal" />
                DNA-Based Traits
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-panel rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Skin Type</h3>
                  <p className="text-white/80">{userData.dnaTraits.skinType}</p>
                </div>
                <div className="glass-panel rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Hair Type</h3>
                  <p className="text-white/80">{userData.dnaTraits.hairType}</p>
                </div>
                <div className="glass-panel rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Stress Level</h3>
                  <p className="text-white/80">{userData.dnaTraits.stressLevel}</p>
                </div>
                <div className="glass-panel rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Metabolism</h3>
                  <p className="text-white/80">{userData.dnaTraits.metabolism}</p>
                </div>
                <div className="glass-panel rounded-xl p-6 md:col-span-2">
                  <h3 className="text-lg font-semibold mb-3">Sleep Pattern</h3>
                  <p className="text-white/80">{userData.dnaTraits.sleepPattern}</p>
                </div>
              </div>
            </div>

            {/* Health Concerns */}
            <div className="glass-panel rounded-xl p-8 mb-12 border border-ayur-blue/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-2 text-ayur-blue" />
                Health Concerns
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {userData.healthConcerns.map((concern, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-ayur-blue mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{concern}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended TAC Products */}
            <div className="glass-panel rounded-xl p-8 mb-12 border border-ayur-gold/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Sun className="w-6 h-6 mr-2 text-ayur-gold" />
                Recommended TAC Products
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {recommendedProducts.map(product => (
                  <div key={product.id} className="glass-panel rounded-xl p-6 transform transition-all hover:-translate-y-2 duration-300">
                    <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-white/5">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-white/70 mb-3">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-ayur-gold font-medium">{product.price}</span>
                    </div>
                    <a 
                      href={product.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-ayur-gold to-ayur-teal text-white font-medium transition-all duration-300 flex items-center justify-center"
                    >
                      Buy Now <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* AI-Generated Ayurvedic Recommendations */}
            <div className="glass-panel rounded-xl p-8 mb-12 border border-ayur-teal/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Brain className="w-6 h-6 mr-2 text-ayur-teal" />
                AI-Generated Ayurvedic Recommendations
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-panel rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Diet Recommendations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Favor warm, cooked foods over cold, raw foods</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Include healthy fats like ghee and olive oil</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Incorporate warming spices: ginger, cinnamon, cumin</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Maintain regular meal times for balanced digestion</span>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-panel rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Skincare Routine</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Daily oil massage (abhyanga) with sesame oil</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Use gentle, hydrating cleansers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Apply Kumkumadi face oil before bed</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-ayur-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">Stay hydrated with warm herbal teas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Real-time Health Insights */}
            <div className="glass-panel rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Real-time Health Insights</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-panel rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-ayur-blue">Stress Levels</h3>
                  <div className="w-full bg-white/10 rounded-full h-4 mb-2">
                    <div className="bg-ayur-blue h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-white/70">Moderate - Consider meditation and breathing exercises</p>
                </div>
                
                <div className="glass-panel rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-ayur-teal">Sleep Quality</h3>
                  <div className="w-full bg-white/10 rounded-full h-4 mb-2">
                    <div className="bg-ayur-teal h-4 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-white/70">Below average - Try herbal sleep supplements</p>
                </div>
                
                <div className="glass-panel rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-ayur-gold">Metabolism</h3>
                  <div className="w-full bg-white/10 rounded-full h-4 mb-2">
                    <div className="bg-ayur-gold h-4 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <p className="text-white/70">High - Focus on regular, nourishing meals</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Continue Your <span className="gradient-text">Wellness Journey</span></h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Explore more personalized recommendations and track your progress over time.
              </p>
              <Link 
                to="/dna-scan" 
                className="relative group px-8 py-4 bg-ayur-blue hover:bg-ayur-blue/90 rounded-lg font-medium text-white transition-all duration-300 overflow-hidden transform hover:-translate-y-1 inline-block"
              >
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-ayur-blue via-ayur-teal to-ayur-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100"></div>
                <span className="relative flex items-center justify-center">
                  Update Your DNA Profile 
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile; 