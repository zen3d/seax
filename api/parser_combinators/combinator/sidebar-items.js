initSidebarItems({"trait":[["ParserExt","Extension trait which provides functions that are more conveniently used through method calls"]],"fn":[["between","Parses `open` followed by `parser` followed by `close` Returns the value of `parser`"],["chainl1","Parses `p` 1 or more times separated by `op` The value returned is the one produced by the left associative application of `op`"],["chainr1","Parses `p` one or more times separated by `op` The value returned is the one produced by the right associative application of `op`"],["choice_slice",""],["choice_vec",""],["many","Parses `p` zero or more times returning a collection with the values from `p`. If the returned collection cannot be inferred type annotations must be supplied, either by annotating the resulting type binding `let collection: Vec<_> = ...` or by specializing when calling many, `many::<Vec<_>, _>(...)`"],["many1","Parses `p` one or more times returning a collection with the values from `p`. If the returned collection cannot be inferred type annotations must be supplied, either by annotating the resulting type binding `let collection: Vec<_> = ...` or by specializing when calling many1 `many1::<Vec<_>, _>(...)`"],["not_followed_by","Succeeds only if `parser` fails. Never consumes any input."],["optional","Returns `Some(value)` and `None` on parse failure (always succeeds)"],["parser","Wraps a function, turning it into a parser Mainly needed to turn closures into parsers as function types can be casted to function pointers to make them usable as a parser"],["sep_by","Parses `parser` zero or more time separated by `separator`, returning a collection with the values from `p`. If the returned collection cannot be inferred type annotations must be supplied, either by annotating the resulting type binding `let collection: Vec<_> = ...` or by specializing when calling sep_by, `sep_by::<Vec<_>, _, _>(...)`"],["skip_many","Parses `p` zero or more times ignoring the result"],["skip_many1","Parses `p` one or more times ignoring the result"],["try","Try acts as `p` except it acts as if the parser hadn't consumed any input if `p` returns an error after consuming input"],["unexpected","Always fails with `message` as the error. Never consumes any input."],["value","Always returns the value `v` without consuming any input."]],"struct":[["And",""],["Between",""],["Chainl1",""],["Chainr1",""],["ChoiceSlice",""],["ChoiceVec",""],["Expected",""],["FnParser",""],["Many",""],["Many1",""],["Map",""],["Message",""],["NotFollowedBy",""],["Optional",""],["Or",""],["SepBy",""],["Skip",""],["SkipMany",""],["SkipMany1",""],["Then",""],["Try",""],["Unexpected",""],["Value",""],["With",""]]});