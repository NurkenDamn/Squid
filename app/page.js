import { Footer, Header, HowItWorks, Introduction } from '../sections';
import { Navbar } from '../components';

const Page = () => (
  <div className="md:mr-[0px] mr-[-2px]">
    <div className="bg_gradient-01">
        <Navbar />
        <Header />
    </div>
    <div className="bg_gradient-02">
        <Introduction />
        <HowItWorks />
    </div>
    <div className="bg_gradient-02">
        <Footer />
    </div>
  </div>
);

export default Page;
