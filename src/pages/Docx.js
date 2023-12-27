import Navigation from "../components/Navigation";

const Docx = () => {
    return (
        <div>
            <Navigation />
            <div class="dark:bg-gray-800 p-4 rounded-md shadow-md">
            <iframe 
  src="https://www.myscheme.gov.in/find-scheme"  
  class="rounded-md overflow-hidden w-full h-96 mt-[-50px]"
></iframe>
</div>

        </div>
    );
}

export default Docx;