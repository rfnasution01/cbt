export function CBTSoalQuestion({ question }: { question: string }) {
  return <div dangerouslySetInnerHTML={{ __html: question }} />
}
