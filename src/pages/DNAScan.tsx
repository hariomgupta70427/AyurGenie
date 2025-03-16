import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import DnaHelix from '../components/DnaHelix';
import { ArrowRight, Check, Save } from 'lucide-react';

const DNAScan = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: 'male',
    email: '',
    // Lifestyle habits
    sleepHours: '',
    exerciseFrequency: 'moderate',
    dietType: 'mixed',
    stressLevel: 'moderate',
    // DNA-Based traits
    skinType: 'normal',
    hairType: 'normal',
    geneticStressLevel: 'moderate',
    metabolism: 'normal',
    // Health concerns
    healthConcerns: '',
    // Additional notes
    additionalNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    console.log('Form submitted:', formData);
    // Redirect to profile page
    navigate('/profile');
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get Your Ayurvedic <span className="gradient-text">Gene Profile</span>
              </h1>
              <p className="text-white/70 max-w-3xl mx-auto text-lg">
                Complete the form below to receive your personalized Ayurvedic profile based on your DNA and lifestyle data.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-radial from-ayur-blue/20 to-transparent rounded-full animate-pulse-glow"></div>
                  <DnaHelix className="z-10" />
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Advanced <span className="text-ayur-blue">Genetic Analysis</span></h2>
                <p className="text-white/70 mb-6">
                  Unlike conventional DNA tests, AyurGenie's proprietary genetic analysis is specifically designed to
                  identify markers related to your Ayurvedic constitution or "prakriti" – the unique balance of doshas
                  that defines your physical, mental, and emotional characteristics.
                </p>
                <p className="text-white/70 mb-8">
                  Our technology examines thousands of genetic variations that influence your dosha balance,
                  metabolic tendencies, and health predispositions through the lens of Ayurvedic science.
                </p>
                <button 
                  onClick={() => document.getElementById('profile-form').scrollIntoView({ behavior: 'smooth' })}
                  className="relative group px-6 py-3 bg-ayur-blue hover:bg-ayur-blue/90 rounded-lg font-medium text-white transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-ayur-blue via-ayur-teal to-ayur-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100"></div>
                  <span className="relative flex items-center justify-center">
                    Start Your Profile Now
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
            
            {/* User Profile Form */}
            <div id="profile-form" className="glass-panel rounded-xl p-8 mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Your <span className="gradient-text">Profile Information</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="glass-panel rounded-xl p-6 border border-ayur-blue/20">
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-white/80 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-blue focus:outline-none focus:ring-1 focus:ring-ayur-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-white/80 mb-2">Age</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min="1"
                        max="120"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-blue focus:outline-none focus:ring-1 focus:ring-ayur-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-white/80 mb-2">Gender</label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-blue focus:outline-none focus:ring-1 focus:ring-ayur-blue"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-blue focus:outline-none focus:ring-1 focus:ring-ayur-blue"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Lifestyle Habits */}
                <div className="glass-panel rounded-xl p-6 border border-ayur-teal/20">
                  <h3 className="text-xl font-semibold mb-4">Lifestyle Habits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="sleepHours" className="block text-white/80 mb-2">Average Sleep Hours</label>
                      <input
                        type="number"
                        id="sleepHours"
                        name="sleepHours"
                        value={formData.sleepHours}
                        onChange={handleChange}
                        min="1"
                        max="24"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-teal focus:outline-none focus:ring-1 focus:ring-ayur-teal"
                      />
                    </div>
                    <div>
                      <label htmlFor="exerciseFrequency" className="block text-white/80 mb-2">Exercise Frequency</label>
                      <select
                        id="exerciseFrequency"
                        name="exerciseFrequency"
                        value={formData.exerciseFrequency}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-teal focus:outline-none focus:ring-1 focus:ring-ayur-teal"
                      >
                        <option value="sedentary">Sedentary</option>
                        <option value="light">Light (1-2 days/week)</option>
                        <option value="moderate">Moderate (3-4 days/week)</option>
                        <option value="active">Active (5+ days/week)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="dietType" className="block text-white/80 mb-2">Diet Type</label>
                      <select
                        id="dietType"
                        name="dietType"
                        value={formData.dietType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-teal focus:outline-none focus:ring-1 focus:ring-ayur-teal"
                      >
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="mixed">Mixed/Omnivore</option>
                        <option value="keto">Keto/Low-carb</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="stressLevel" className="block text-white/80 mb-2">Stress Level</label>
                      <select
                        id="stressLevel"
                        name="stressLevel"
                        value={formData.stressLevel}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-teal focus:outline-none focus:ring-1 focus:ring-ayur-teal"
                      >
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                        <option value="severe">Severe</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* DNA-Based Traits */}
                <div className="glass-panel rounded-xl p-6 border border-ayur-gold/20">
                  <h3 className="text-xl font-semibold mb-4">DNA-Based Traits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="skinType" className="block text-white/80 mb-2">Skin Type</label>
                      <select
                        id="skinType"
                        name="skinType"
                        value={formData.skinType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-gold focus:outline-none focus:ring-1 focus:ring-ayur-gold"
                      >
                        <option value="dry">Dry (Vata)</option>
                        <option value="sensitive">Sensitive/Reddish (Pitta)</option>
                        <option value="oily">Oily/Thick (Kapha)</option>
                        <option value="combination">Combination</option>
                        <option value="normal">Normal/Balanced</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="hairType" className="block text-white/80 mb-2">Hair Type</label>
                      <select
                        id="hairType"
                        name="hairType"
                        value={formData.hairType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-gold focus:outline-none focus:ring-1 focus:ring-ayur-gold"
                      >
                        <option value="dry">Dry/Frizzy (Vata)</option>
                        <option value="thin">Thin/Early Graying (Pitta)</option>
                        <option value="thick">Thick/Oily (Kapha)</option>
                        <option value="normal">Normal/Balanced</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="geneticStressLevel" className="block text-white/80 mb-2">Genetic Stress Response</label>
                      <select
                        id="geneticStressLevel"
                        name="geneticStressLevel"
                        value={formData.geneticStressLevel}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-gold focus:outline-none focus:ring-1 focus:ring-ayur-gold"
                      >
                        <option value="anxious">Anxious/Worried (Vata)</option>
                        <option value="irritable">Irritable/Intense (Pitta)</option>
                        <option value="calm">Calm/Steady (Kapha)</option>
                        <option value="moderate">Moderate/Balanced</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="metabolism" className="block text-white/80 mb-2">Metabolism</label>
                      <select
                        id="metabolism"
                        name="metabolism"
                        value={formData.metabolism}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-gold focus:outline-none focus:ring-1 focus:ring-ayur-gold"
                      >
                        <option value="variable">Variable/Irregular (Vata)</option>
                        <option value="fast">Fast/Intense (Pitta)</option>
                        <option value="slow">Slow/Steady (Kapha)</option>
                        <option value="normal">Normal/Balanced</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Health Concerns */}
                <div className="glass-panel rounded-xl p-6 border border-ayur-blue/20">
                  <h3 className="text-xl font-semibold mb-4">Health Concerns</h3>
                  <div>
                    <label htmlFor="healthConcerns" className="block text-white/80 mb-2">
                      Please list any health concerns or issues you'd like to address
                    </label>
                    <textarea
                      id="healthConcerns"
                      name="healthConcerns"
                      value={formData.healthConcerns}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-ayur-blue focus:outline-none focus:ring-1 focus:ring-ayur-blue"
                      placeholder="E.g., digestive issues, skin problems, stress management, sleep difficulties, etc."
                    ></textarea>
                  </div>
                </div>
                
                {/* Additional Notes */}
                <div className="glass-panel rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4">Additional Notes</h3>
                  <div>
                    <label htmlFor="additionalNotes" className="block text-white/80 mb-2">
                      Any additional information you'd like to share
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                      placeholder="Family health history, specific goals, etc."
                    ></textarea>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="text-center">
                  <button 
                    type="submit"
                    className="relative group px-8 py-4 bg-gradient-to-r from-ayur-blue to-ayur-teal rounded-lg font-medium text-white transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                  >
                    <span className="relative flex items-center justify-center">
                      <Save className="mr-2 w-5 h-5" />
                      Save Profile & Get Recommendations
                    </span>
                  </button>
                </div>
              </form>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Unlock Your <span className="gradient-text">Ayurvedic Potential</span></h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Join thousands who have discovered the power of personalized Ayurveda through AyurGenie's
                revolutionary DNA analysis.
              </p>
              <button 
                onClick={() => document.getElementById('profile-form').scrollIntoView({ behavior: 'smooth' })}
                className="relative group px-8 py-4 bg-ayur-blue hover:bg-ayur-blue/90 rounded-lg font-medium text-white transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-ayur-blue via-ayur-teal to-ayur-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100"></div>
                <span className="relative flex items-center justify-center">
                  Complete Your Profile Now
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DNAScan;
