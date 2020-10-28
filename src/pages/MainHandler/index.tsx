import React from "react";
import { Listbox } from "../../components/Listbox";
import { SearchBar } from "../../components/SearchBar";
import { Sidebar } from "../../components/Sidebar";
import { TaskView } from "../../components/TaskView";
import { Wrapper, Container, ContentWrapper } from "./style";

export const MainHandler = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <SearchBar />
        <ContentWrapper>
          <Listbox />
          <TaskView />
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};
