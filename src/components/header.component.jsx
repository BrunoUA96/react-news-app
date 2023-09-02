export const Header = () => {
   return (
      <div className="flex justify-between border-b pb-3">
         {/* Greetings & Date today */}
         <div>
            <h1 className="text-3xl font-bold">Good morning</h1>
            <span className="text-sm text-gray-500">Monday, Jaunary 25, 2023</span>
         </div>
         {/* Weather */}
         <div className="flex flex-col">
            <div className="text-xl font-bold">28°C</div>
         </div>
      </div>
   );
};
