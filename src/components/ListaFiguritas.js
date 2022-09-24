import Figurita from './Figurita'




const cards = [
//  { id: 1, image:"https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c", title:"lelouch"},
//  { id: 2, image:"https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c", title:"Milly Ashford"},
//  { id: 3, image:"https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c", title:"Shirley Fenette"},
//  { id: 4, image:"https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c", title:"Rivalz Cardemonde"},
//  { id: 5, image:"https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c", title:"Nina Einstein"},
    {
      id: 1,
      image: "https://i.imgur.com/jD1dCpv.jpeg",
      name: "Al Rihla",
      price: "$10.000"
    },
    {
      id: 2,
      image: "https://i.imgur.com/nvu03MW.jpeg",
      name: "Angel Di Maria",
      price: "$9.000"
    },
    {
      id: 3,
      image: "https://i.imgur.com/wVHltYV.jpeg",
      name: "Emiliano Martinez",
      price: "$10.000"
    },
    {
      id: 4,
      image: "https://i.imgur.com/MzoxwwA.jpeg",
      name: "Franco Armani",
      price: "$8.000"
    },
    {
      id: 5,
      image: "https://i.imgur.com/KiIvXJQ.jpeg",
      name: "Lionel Messi",
      price: "$10.000"
    },
    {
      id: 6,
      image: "https://i.imgur.com/3klprdl.jpeg",
      name: "AFA",
      price: "$10.000"
    },
    {
      id: 7,
      image: "https://i.imgur.com/rOFek7r.jpeg",
      name: "Neymar jr.",
      price: "$10.000"
    },
    {
      id: 8,
      image: "https://i.imgur.com/PffoZbB.jpeg",
      name: "CBF",
      price: "$10.000"
    },
    {
      id: 9,
      image: "https://i.imgur.com/EgsFnWi.jpeg",
      name: "Luka Modric",
      price: "$10.000"
    },
    {
      id: 10,
      image: "https://i.imgur.com/KbgcnCY.jpeg",
      name: "Sergio Busquets",
      price: "$9.500"
    },
    {
      id: 11,
      image: "https://i.imgur.com/7fDNGs8.jpeg",
      name: "Antoine Griezmann",
      price: "$10.000"
    },
    {
      id: 12,
      image: "https://i.imgur.com/ygcZ1A4.jpg",
      name: "Kylian Mbappe",
      price: "$10.000"
    },
    {
      id: 13,
      image: "https://i.imgur.com/PtG3hhD.jpg",
      name: "N'golo Kante",
      price: "$8.000"
    },
    {
      id: 14,
      image: "https://i.imgur.com/hnXZA6B.jpg",
      name: "Paul Pogba",
      price: "$7.500"
    },
    {
      id: 15,
      image: "https://i.imgur.com/C1ui3Fh.jpg",
      name: "Manuel Neuer",
      price: "$9.500"
    },
    {
      id: 16,
      image: "https://i.imgur.com/e4A6P5T.jpg",
      name: "Marc-Andre Ter Stegen",
      price: "$9.000"
    },
    {
      id: 17,
      image: "https://i.imgur.com/DNc3Lus.jpg",
      name: "Cristiano Ronaldo",
      price: "$10.000"
    },
    {
      id: 18,
      image: "https://i.imgur.com/OhW9k2S.jpg",
      name: "Edison Cavani",
      price: "$8.500"
    },
    {
      id: 19,
      image: "https://i.imgur.com/LqCjSMZ.jpg",
      name: "Luis Suarez",
      price: "$9.000"
    },
    {
      id: 20,
      image: "https://i.imgur.com/FVjVqm2.jpg",
      name: "Gareth Bale",
      price: "$8.000"
    }
 ]

export const ListaFiguritas = (props) => {
 return (
   <div className='pt-5 pb-12 text-5xl font-bold text-center bg-gray-100 h-fit text-primary'>
     <h2>MAS BUSCADAS</h2>
     <section className="flex flex-wrap justify-center gap-3.5">

         {
           cards.map((card) => <Figurita key={card.id} img ={card.image} title={card.title} price={card.price} />)

         }   
     </section>

   </div>
 )
}

export default ListaFiguritas