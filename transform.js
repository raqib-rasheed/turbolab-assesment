function createTransformedDataTemplate(model = []) {
  let transformedDataTemplate = [];
  if (Array.isArray(model) && model.length > 0) {
    transformedDataTemplate = model.map((currentModelEntry) => {
      let { title = "", children = [] } = currentModelEntry;
      let childrenEntry = [];
      if (Array.isArray(children) && children.length > 0) {
        childrenEntry =
          children[0].children && children[0].children.length > 0
            ? children[0].children.map((child) => {
                return { title: child.title };
              })
            : [];
      }
      const templateModelEntry = {
        title,
      };
      if (childrenEntry.length > 0) {
        templateModelEntry.children = childrenEntry;
      }
      return templateModelEntry;
    });
  }
  return transformedDataTemplate;
}

function getDataFromNodeWithModel(
  data = {},
  dataIndex = 0,
  model = [],
  template = {}
) {
  model.forEach((entry, index) => {
    const { key = "", children = [] } = entry;
    if (Array.isArray(children) && children.length > 0) {
      const childEntriesModel =
        Array.isArray(children[0].children) && children[0].children.length > 0
          ? children[0].children
          : [];
      if (childEntriesModel.length > 0) {
        childEntriesModel.forEach((modelEntry, nestedEntryIndex) => {
          const { key, dataKey } = modelEntry;
          const nestedNodes = data[key];
          const nestedNode =
            nestedNodes &&
            Array.isArray(nestedNodes.edges) &&
            nestedNodes.edges.length > 0
              ? nestedNodes.edges[0]
              : {};
          const nestedNodeData = nestedNode.node ? nestedNode.node : {};
          template[index]["children"][nestedEntryIndex][`data${dataIndex}`] =
            nestedNodeData[dataKey] || "";
        });
      }
    } else {
      template[index][`data${dataIndex}`] = data[key];
    }
  });

  return template;
}

function transform(input = [], model = []) {
  let transformedDataTemplate = [];
  let transformedData = [];
  if (Array.isArray(input) && input.length > 0) {
    transformedDataTemplate = createTransformedDataTemplate(model);
    transformedData = input.reduce((acc, currentNode, currentNodeIndex) => {
      const nodeIdentifierKeys = Object.keys(currentNode) || [];
      const nodeIdentifierKey = nodeIdentifierKeys[0] || "node";
      const currentNodeData = currentNode[nodeIdentifierKey];

      acc = getDataFromNodeWithModel(
        currentNodeData,
        currentNodeIndex,
        model,
        acc
      );

      return acc;
    }, transformedDataTemplate);
  }
  return transformedData;
}

module.exports = transform;
