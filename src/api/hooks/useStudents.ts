import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const key = "students";

export const useStudents = () => {
  const client = useQueryClient();

  const getStudents = () =>
    useQuery({ queryKey: [key], queryFn: () => api.get("/students").then(rec => rec.data) });

    const createStudents = useMutation({
      mutationFn: (student: any) => api.post("/students", student),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    });

    const deleteStudents = useMutation({
      mutationFn: (id:any) => api.delete(`/students/${id}`),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    });

     const ubdateStudents = useMutation({
      mutationFn: ({student, id} :{student:any, id:string} ) => api.put(`/students/${id}`, student),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    });

  return { getStudents, createStudents,deleteStudents , ubdateStudents};
};
