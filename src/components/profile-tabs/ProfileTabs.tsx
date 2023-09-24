import { Tab } from "@headlessui/react";
import { UserFarmDescForm } from "../forms/UserFarmDescForm";
import { UserPasswordChangeForm } from "../forms/UserPasswordChangeForm";
import { UserProducts } from "../user-products/UserProducts";
import "./profile-tabs.css";

export const ProfileTabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="sm:flex-row flex-col flex mb-6 w-2/3 text-base text-brown cursor-pointer sm:border-b  sm:border-light-grey">
        <Tab className="tab-element sm:w-[218px]">DANE GOSPODARSTWA</Tab>
        <Tab className="tab-element sm:w-[160px]">ZMIANA HASŁA</Tab>
        <Tab className="tab-element sm:w-[190px] ">TWOJE PRODUKTY</Tab>
      </Tab.List>
      <Tab.Panels className="w-2/3">
        <Tab.Panel className="flex sm:items-center sm:justify-center">
          <UserFarmDescForm />
        </Tab.Panel>
        <Tab.Panel>
          <UserPasswordChangeForm />
        </Tab.Panel>
        <Tab.Panel>
          <UserProducts />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
