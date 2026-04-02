export const Features: React.FC = () => {
  const features = [
    { head: '10k+', content: 'students', color: 'var(--color-cyan)' },
    { head: '500+', content: 'papers', color: 'var(--color-orange)' },
    { head: '95%', content: 'pass rate', color: 'var(--color-lime)' },
    { head: 'Free', content: 'forever', color: 'var(--color-magenta)' }
  ]

  return (
    <aside
      className='flex items-center justify-end flex-col mt-40 mb-70'
    >
      <div className='flex flex-wrap justify-evenly gap-10'>
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className='feat-content'
              style={{ '--feat-color': feature.color } as React.CSSProperties}
            >
                <h3 className=''>{feature.head}</h3>
               <p>{feature.content}</p>
            </div>
          )
        })}
      </div>
    </aside>
  )
}