import React from 'react';

interface ContactCardProps {
  icon: React.ReactNode; // Acceptă un icon ca React element (de exemplu, din HeroIcons sau FontAwesome)
  title: string;
  text: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, text }) => {
  return (
    <div className="flex gap-4"> 
        <div className="text-4xl mb-4 text-white">{icon}</div>
     
        <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-bold mb-2 text-contact">{title}</h3>
            <p className="text-[#AAAAAA]">{text}</p>
        </div>
    </div>
  );
};

export default ContactCard;
