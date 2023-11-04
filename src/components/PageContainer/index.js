export default function PageContainer({ title, children, className }) {

  return (

    <main className={'page ' + (className || '')}>
      <h1>{title}</h1>
      <div className='container'>
        {children}
      </div>
    </main>

  );

}