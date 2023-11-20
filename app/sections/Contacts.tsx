import { ContactsForm } from "../../components/ContactsForm";
import { ContactsInfo } from "../../components/ContactsInfo";




export default function Contacts() {
  return (
    <section id="/contacts" className="bg-Contacts bg-cover bg-no-repeat bg-center">
      <div className="section-main container-main">
        <h2 className="mainTitle mb-9 tablet:mb-10 desktop:mb-[71px]">
          Contact <span className="font-medium">US</span>
        </h2>
        <div className="flex flex-col gap-y-3 tablet:gap-y-[64px] desktop:flex-row desktop:gap-x-[231px]">
          <ContactsInfo />
          <ContactsForm />
        </div>
      </div>
    </section>
  );
}
