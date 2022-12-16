https://www.digitalocean.com/community/tutorials/typescript-running-typescript-ts-node

TypeScript REPL (read-evaluate-print loop)


#Sample Command
npx ts-node reptile.ts

C:\data\rajan\javascript\react\react\understanding-ts-node>npx ts-node
> class HelloWorld {
... shuffle(): void {
..... return 'Ts node';
<repl>.ts:6:1 - error TS2322: Type 'string' is not assignable to type 'void'.

6 return 'Ts node';
  ~~~~~~~~~~~~~~~~~
<repl>.ts:7:1 - error TS1005: '}' expected.

  <repl>.ts:5:17
    5 shuffle(): void {
                      ~
    The parser expected to find a '}' to match the '{' token here.

> class HelloWorld {
....... shuffle(): string {
......... return 'Ts node';
......... }
....... }
undefined
> const helloWorld = new HelloWorld();
undefined
> helloWorld.shuffle()
'Ts node'
>
undefined
>


'tsc' is not recognized as an internal or external command,
operable program or batch file.

https://www.digitalocean.com/community/tutorials/how-to-work-with-typescript-in-visual-studio-code
