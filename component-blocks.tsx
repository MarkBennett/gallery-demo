import React from "react";
import {
  NotEditable,
  component,
  fields,
} from "@keystone-6/fields-document/component-blocks";

// naming the export componentBlocks is important because the Admin UI
// expects to find the components like on the componentBlocks export
export const componentBlocks = {
  quote: component({
    preview: (props) => {
      return (
        <div
          style={{
            borderLeft: "3px solid #CBD5E0",
            paddingLeft: 16,
          }}
        >
          <div style={{ fontStyle: "italic", color: "#4A5568" }}>
            {props.fields.content.element}
            <NotEditable> IS THIS EDITABLE?</NotEditable>
          </div>
          <div style={{ fontWeight: "bold", color: "#718096" }}>
            <NotEditable>— </NotEditable>
            {props.fields.attribution.element}
          </div>
        </div>
      );
    },
    label: "Quote",
    schema: {
      content: fields.child({
        kind: "block",
        placeholder: "Quote...",
        formatting: { inlineMarks: "inherit", softBreaks: "inherit" },
        links: "inherit",
      }),
      attribution: fields.child({
        kind: "inline",
        placeholder: "Attribution...",
      }),
    },
    chromeless: true,
  }),
};
