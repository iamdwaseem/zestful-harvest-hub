
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-fruitbox-green flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-6 w-6 text-white"
              >
                <path d="M17.5 6H17C15.6 3.2 12.5 1 9 1C4.6 1 1 4.6 1 9C1 12.5 3.2 15.6 6 17V17.5C6 20 8 22 10.5 22H13.5C16 22 18 20 18 17.5V17C20.8 15.6 23 12.5 23 9C23 4.6 19.4 1 15 1C11.5 1 8.4 3.2 7 6H6.5" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-fruitbox-green">Fruit Box</span>
          </div>
          <div>
            <Button 
              onClick={() => navigate('/dashboard')}
              className="bg-fruitbox-green hover:bg-fruitbox-green/90"
            >
              Admin Dashboard
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 animate-enter">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Freshness Delivered, <span className="dashboard-title">Wellness Simplified</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 leading-relaxed">
            Empower your health journey with daily, curated selections of premium fruits, nuts, and salads, delivered directly to your doorstep.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => navigate('/dashboard')}
              className="bg-fruitbox-green hover:bg-fruitbox-green/90 text-white px-8 py-3 rounded-lg"
            >
              Access Analytics
            </Button>
            <Button variant="outline" className="border-fruitbox-green text-fruitbox-green hover:bg-fruitbox-green/10 px-8 py-3 rounded-lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-enter" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute -left-6 -top-6 w-64 h-64 bg-fruitbox-green/10 rounded-full"></div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-fruitbox-orange/10 rounded-full"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Fruit Box" 
                className="rounded-lg w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 bg-gray-50 rounded-3xl my-16">
        <h2 className="text-3xl font-bold text-center text-gray-900">Admin Dashboard Features</h2>
        <p className="text-center text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Our powerful analytics platform helps you make data-driven decisions
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fruitbox-green/10 rounded-lg flex items-center justify-center text-fruitbox-green mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-6 w-6"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" x2="12" y1="22" y2="12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Sales Reports</h3>
            <p className="mt-2 text-gray-600">
              Track daily, weekly, and monthly sales performance with visual data representations.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fruitbox-green/10 rounded-lg flex items-center justify-center text-fruitbox-green mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-6 w-6"
              >
                <path d="M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
                <path d="M8 6v12" />
                <path d="M16 6v12" />
                <path d="M8 12h8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Inventory Insights</h3>
            <p className="mt-2 text-gray-600">
              Monitor stock levels, product turnover, and optimize inventory to minimize waste.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fruitbox-green/10 rounded-lg flex items-center justify-center text-fruitbox-green mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-6 w-6"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Customer Analysis</h3>
            <p className="mt-2 text-gray-600">
              Understand customer preferences and behavior to improve offerings and retention.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            onClick={() => navigate('/dashboard')}
            className="bg-fruitbox-green hover:bg-fruitbox-green/90"
          >
            Explore the Dashboard
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-fruitbox-green flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="h-4 w-4 text-white"
                  >
                    <path d="M17.5 6H17C15.6 3.2 12.5 1 9 1C4.6 1 1 4.6 1 9C1 12.5 3.2 15.6 6 17V17.5C6 20 8 22 10.5 22H13.5C16 22 18 20 18 17.5V17C20.8 15.6 23 12.5 23 9C23 4.6 19.4 1 15 1C11.5 1 8.4 3.2 7 6H6.5" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-fruitbox-green">Fruit Box</span>
              </div>
              <p className="mt-2 text-sm text-gray-600 max-w-xs">
                Empowering health-conscious individuals with daily, curated selections of premium produce.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Features</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-fruitbox-green">Dashboard</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-fruitbox-green">Reports</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-fruitbox-green">Analytics</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-fruitbox-green">Help Center</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-fruitbox-green">Contact Us</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-fruitbox-green">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-fruitbox-green">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-fruitbox-green">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-fruitbox-green">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-fruitbox-green">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-fruitbox-green">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base text-gray-500 md:mt-0 md:order-1">
              &copy; 2025 Fruit Box. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
