import { Project, SyntaxKind } from "ts-morph"
import { join } from "path"

const resolveRoot = () => join(__dirname, '..', '..')

const project = new Project({
  tsConfigFilePath: join(resolveRoot(), 'tsconfig.base.json')
})

const files = project.addSourceFilesFromTsConfig("../../libs/editor/tsconfig.lib.json");

console.log(`Success. Number of files: ${files.length}`)

files.forEach((sourceFile) => {
  const callExpressions = sourceFile.getVariableDeclarations().flatMap((s) => {
    return s.getChildrenOfKind(SyntaxKind.CallExpression)
  })

  callExpressions.forEach((expression) => {
    console.log(expression.getArguments())
  })
})

// project.save()
