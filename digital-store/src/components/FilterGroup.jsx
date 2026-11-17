import "./FilterGroup.css";

// Grupo de checkboxes ou radios. Quem controla o estado é a página, aqui só desenhamos e avisamos.
export default function FilterGroup({ title, inputType = "checkbox", options, name, selected = [], onChange }) {
  return (
    <fieldset className="filter-group">
      <legend>{title}</legend>
      {options.map((opcao) => {
        const valor = opcao.value ?? opcao.text;
        return (
          <label key={valor}>
            <input
              type={inputType}
              name={name}
              value={valor}
              checked={selected.includes(valor)}
              onChange={(e) => onChange(valor, e.target.checked)}
            />
            <span>{opcao.text}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
