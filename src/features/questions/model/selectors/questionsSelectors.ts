import { State } from "@/shared/config/store/State";

export const questionsPageSelectors = {
  filters: (state: State) => state.questions,
  currentPage: (state: State) => state.questions.page,
  titleFilter: (state: State) => state.questions.title,
  skillsFilter: (state: State) => state.questions.skills,
  complexityFilter: (state: State) => state.questions.complexity,
  specializationsFilter: (state: State) => state.questions.specializations,

  allFilters: (state: State) => ({
    page: state.questions.page,
    title: state.questions.title,
    skills: state.questions.skills,
    rate: state.questions.rate,
    complexity: state.questions.complexity,
    specializations: state.questions.specializations,
  })
}