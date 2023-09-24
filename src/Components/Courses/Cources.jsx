 
import Card from "../Card/Card";
import { courses } from "../../../public/Data/Data";
const Coerces = () => {
     
     return (
          <div className='w-full bg-[#E9F8F3B2] py-32'>
        <div className='md:max-w-[1240px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-4'>
              <h1 className='py-3 text-3xl font-bold'>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
              <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
            </div>
            <div className="md:grid md:grid-cols-3 gap-9">


             {
               courses.map((course,index)=> <Card key={index} course={course}/>)
             }
            
            </div>
        </div>

    </div>
     );
};

export default Coerces;