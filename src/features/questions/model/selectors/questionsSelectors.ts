import { RootState } from "@/app/providers/store/config/store";

export const questionsPageSelectors = {
  filters: (state: RootState) => state.questions,
  currentPage: (state: RootState) => state.questions.page,
  titleFilter: (state: RootState) => state.questions.title,
  skillsFilter: (state: RootState) => state.questions.skills,
  complexityFilter: (state: RootState) => state.questions.complexity,
  specializationsFilter: (state: RootState) => state.questions.specializations,
}