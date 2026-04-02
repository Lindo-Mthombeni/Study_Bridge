import { Zap, FileText, Lightbulb, Squircle } from 'lucide-react';
import { Card } from '../build/Card';

export const StudyResources: React.FC = () => {
  const resources = [
    {
      head: '25+ sheets',
      name: 'Formula Sheets',
      text: 'Quick access to all essential formulas for Maths and Physics',
      icon: <Zap />,
      color: 'var(--color-orange)',
    },
    {
      head: '40+ guides',
      name: 'Study Guides',
      text: 'Comprehensive guides covering core concepts and exam tips',
      icon: <FileText />,
      color: 'var(--color-lime)',
    },
    {
      head: '100+ tips',
      name: 'Key Exam Tips',
      text: 'Most repeated questions and strategies for tackling finals',
      icon: <Lightbulb />,
      color: 'var(--color-magenta)',
    },
  ];

  return (
    <section className='flex flex-col my-20 gap-5 p-6'>
      <h1 className='text-lg font-black self-center'>Study Resources</h1>
      <p className='text-aside self-center mb-10'>
        Everything you need to ace your exams, all in one place, completely
        free
      </p>
      <div className='resources'>
        {resources.map((resource, index) => {
          return (
            <Card
              variant='secondary'
              key={index}
              style={
                { '--resource-color': resource.color } as React.CSSProperties
              }
              additionalStyles='resource-card'
            >
              <div className='relative h-20 w-20 rounded-full -left-3 shrink-0'>
                <Squircle className='squircle-resource-config' />
                <div className='squircle-resource-icon'>{resource.icon}</div>
              </div>
              <div>
                <h3 className='text-aside text-(--resource-color) brightness-85 font-bold'>
                  {resource.head}
                </h3>
                <h2 className='text-related font-black'>{resource.name}</h2>
                <p className='text-content mt-7 mb-2'>{resource.text}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
