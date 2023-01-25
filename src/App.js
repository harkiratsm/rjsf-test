import { Form } from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import CustomTextWidget from "./CustomTextWidget";
import { CustomFieldTemplate } from "./FieldTemplate";

function App() {
  const schema = 
    {
      "title": "A customizable registration form",
      "description": "A simple form with additional properties example.",
      "type": "object",
      "additionalProperties": {
        "type": "string",
        "description": "Additional property"
      },
      "properties": {
        "firstName": {
          "type": "string",
          "title": "First name",
          "description": "First name or given name"
        },
        "lastName": {
          "type": "string",
          "title": "Name",
          "description": "Last name, family name, or surname"
        }
      }
    }
  
  return (
    <div style={{width: 500, margin: 'auto'}}>
      <Form schema={schema} widgets={{
        TextWidget: CustomTextWidget,
      }}  templates={{
        // FieldTemplate: CustomFieldTemplate, // not quite working for the additionalProperties
      }} liveValidate validator={validator} />
    </div>
  );
}

export default App;
