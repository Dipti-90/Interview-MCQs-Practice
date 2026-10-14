import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2026 Interview MCQs</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span className="text-muted-foreground">by</span>
            <span className="font-semibold text-primary">KMC Students</span>
          </div>
          
          <div className="text-xs text-muted-foreground">
            <span>Best of luck for your Interview exam! 🎓</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;