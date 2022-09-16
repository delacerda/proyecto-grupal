import Figurita from './Figurita'




const cards = [
 { id: 1, image:"https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c", title:"lelouch"},
 { id: 2, image:"https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c", title:"Milly Ashford"},
 { id: 3, image:"https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c", title:"Shirley Fenette"},
 { id: 4, image:"https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c", title:"Rivalz Cardemonde"},
 { id: 5, image:"https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c", title:"Nina Einstein"},
 ]

export const ListaFiguritas = (props) => {
 return (
   <div className='bg-gray-100 h-fit text-primary text-center text-5xl font-bold  pt-5 pb-12 text-gray-900'>
     <h2>MAS BUSCADAS</h2>
     <section className="flex flex-wrap justify-center gap-3.5">

         {
           cards.map((card) => <Figurita key={card.id} img ={card.image} title={card.title} />)

         }   
     </section>

   </div>
 )
}

export default ListaFiguritas