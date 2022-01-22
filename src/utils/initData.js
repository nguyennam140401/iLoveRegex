export const dataRegex = [
    {
        id: '1',
        name: 'regex for username',

        strRegex: '^[a-z0-9_-]{3,15}$',
        textMatch: `lorem
ipsum
gr3at
a
ab
abcd
abcde
john doe
johnny
abcdefghijklmnopqrst`,
    },
    {
        id: '2',
        strRegex: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
        name: 'regex for phone number',
        textMatch: `+919367788755
8989829304
+16308520397
786-307-3615
789
123765
1-1-1
+982`,
    },
    {
        id: '3',
        strRegex: '[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+',
        name: 'regex for email',
        textMatch: `geon@ihateregex.io
test@gmail.com mail@test.org
mail@testing.com
hello@
@test
email@gmail
theproblem@test@gmail.com
mail with@space.com`,
    },
]
// export default { dataRegex }
