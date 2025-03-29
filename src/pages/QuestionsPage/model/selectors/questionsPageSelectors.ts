import { State } from "@/shared/config/store/State";

export const questionsPageSelectors = {
  filters: (state: State) => state.questionsPage,
  currentPage: (state: State) => state.questionsPage.page,
  titleFilter: (state: State) => state.questionsPage.title,
  skillsFilter: (state: State) => state.questionsPage.skills,
  complexityFilter: (state: State) => state.questionsPage.complexity,
}