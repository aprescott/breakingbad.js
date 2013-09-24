var bbSpan = document.createElement("span");
bbSpan.style.backgroundColor = "green";
bbSpan.style.color = "white";
bbSpan.style.padding = "5px";

elements = /A[cglmrstu]|B[aehikr]?|C[adeflmorsu]?|D[bsy]|E[rsu]|F[emf]?|G[ade]|H[efgos]?|I[nk]?|Kr?|L[airu]|M[dgnot]|N[abdeiop]|Os?|P[abdmortu]?|R[abefghnu]|S[bcegimnr]?|T[abcehil]|U(u[bhopqst])?|V|W|Xe|Yb?|Z[nr]/g

findAndReplaceDOMText(elements, document.getElementsByTagName("body")[0], bbSpan, null, function(el) {
	var name = el.nodeName.toLowerCase()
	return name !== 'style' && name !== 'script';
});

