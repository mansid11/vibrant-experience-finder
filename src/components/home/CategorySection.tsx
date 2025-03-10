
import React from 'react';
import { Heading } from '@/components/ui/heading';
import { Link } from 'react-router-dom';
import { Grid3X3, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
  color: string;
}

const categories: Category[] = [
  {
    id: 'music',
    name: 'Music',
    icon: '🎵',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    color: 'from-purple-500/90 to-indigo-600/90'
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: '⚽',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    color: 'from-blue-500/90 to-cyan-600/90'
  },
  {
    id: 'theater',
    name: 'Theater',
    icon: '🎭',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    color: 'from-red-500/90 to-rose-600/90'
  },
  {
    id: 'comedy',
    name: 'Comedy',
    icon: '😂',
    image: 'https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    color: 'from-amber-500/90 to-yellow-600/90'
  },
  {
    id: 'conferences',
    name: 'Conferences',
    icon: '🎤',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    color: 'from-emerald-500/90 to-teal-600/90'
  },
  {
    id: 'exhibitions',
    name: 'Exhibitions',
    icon: '🖼️',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    color: 'from-pink-500/90 to-fuchsia-600/90'
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-tufan-gray/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Heading
            title="Browse Categories"
            description="Find events by category"
            icon={<Grid3X3 className="h-5 w-5 text-tufan-green" />}
          />
          
          <Button variant="ghost" className="text-tufan-green hover:text-tufan-green/90 gap-1">
            All Categories <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <div className="relative h-48 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color}`}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                  <span className="text-3xl mb-2">{category.icon}</span>
                  <h3 className="font-display font-bold text-xl">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
