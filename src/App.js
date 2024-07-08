

function App() {

  const cursos = [
    { id: 1, curso:"React", descricao:"Curso de react", instrutor:"Luciel" },
    { id: 2, curso:"CSS", descricao:"Curso de CSS", instrutor:"Sabino"},
    {id: 3, curso:"JS e CSS Pro", descricao:"Curso avancado de JS e CSS", instrutor:"Sabino"},
    {id:4, curso:"JavaScript basico", descricao:"JB Basico", instrutor:"Cicero"}
  ];

  return (
   <table>
    <thead>
      <tr>
        <th>
          Curso
        </th>
        <th>
          Descrição
        </th>
        <th>
          Instrutor
        </th>
      </tr>
    </thead>
    <tbody>
      {cursos.map(curso => (
        <tr key={curso.id}>
          <td>
            {curso.curso}
          </td>
          <td>
            {curso.descricao}
          </td>
          <td>
            {curso.instrutor}
          </td>
        </tr>
      ))}
    </tbody>
   </table> 
  );
}

export default App;
