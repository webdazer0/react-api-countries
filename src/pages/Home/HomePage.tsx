import ActionList from "@/components/Action-list";
import CountryList from "@/components/Country-list";
import Wrapper from "@/components/Wrapper";

export const HomePage = () => {
    return (
      <Wrapper>
        <ActionList />
        <CountryList />
      </Wrapper>
    );
  };