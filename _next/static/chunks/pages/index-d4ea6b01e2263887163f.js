(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6483:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return re}});var r,a=n(318),s=n(9008),i=n(7294),c=n(4526),o=n(266),u=n(5523),l=n(809),f=n.n(l),p=n(9496),d=n(9476),m=n(3029),x=n(3789),g=n(9573),b=n(164);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var h=function(){var e=(0,o.Z)(f().mark((function e(t,n,a,s){var i,c,o,u,l,p,d,m,h,v,y,w,S,P,T=arguments;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=T.length>4&&void 0!==T[4]?T[4]:r.Parallel,c=T.length>5&&void 0!==T[5]?T[5]:"singleGossip",o=T.length>6?T[6]:void 0,n.publicKey){e.next=5;break}throw new b.oS;case 5:if(u=[],o){e.next=10;break}return e.next=9,t.getRecentBlockhash(c);case 9:o=e.sent;case 10:l=function(e){var t=a[e],r=s[e];if(0===t.length)return"continue";var i=new g.Transaction;t.forEach((function(e){return i.add(e)})),i.recentBlockhash=o.blockhash,i.setSigners.apply(i,[n.publicKey].concat((0,x.Z)(r.map((function(e){return e.publicKey}))))),r.length>0&&i.partialSign.apply(i,(0,x.Z)(r)),u.push(i)},p=0;case 12:if(!(p<a.length)){e.next=19;break}if("continue"!==l(p)){e.next=16;break}return e.abrupt("continue",16);case 16:p++,e.next=12;break;case 19:return e.next=21,n.signAllTransactions(u);case 21:d=e.sent,m=[],h={breakEarly:!1,i:0},console.log("Signed txns length",d.length,"vs handed in length",a.length),v=[],y=0;case 27:if(!(y<d.length)){e.next=60;break}return w=k({connection:t,signedTransaction:d[y]}),e.prev=29,e.next=32,w;case 32:S=e.sent,P=S.txid,v.push(P),e.next=42;break;case 37:e.prev=37,e.t0=e.catch(29),console.error(e.t0),failCallback(d[y],y),i===r.StopOnFailure&&(h.breakEarly=!0,h.i=y);case 42:if(i===r.Parallel){e.next=56;break}return e.prev=43,e.next=46,w;case 46:e.next=54;break;case 48:if(e.prev=48,e.t1=e.catch(43),console.log("Caught failure",e.t1),!h.breakEarly){e.next=54;break}return console.log("Died on ",h.i),e.abrupt("return",h.i);case 54:e.next=57;break;case 56:m.push(w);case 57:y++,e.next=27;break;case 60:if(i===r.Parallel){e.next=63;break}return e.next=63,Promise.all(m);case 63:return e.abrupt("return",v);case 64:case"end":return e.stop()}}),e,null,[[29,37],[43,48]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),v=function(){return(new Date).getTime()/1e3},y=15e3;function k(e){return w.apply(this,arguments)}function w(){return(w=(0,o.Z)(f().mark((function e(t){var n,r,a,s,i,c,u,l,p,d,m,x,g;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,s=void 0===a?y:a,i=n.serialize(),c=v(),u=0,e.next=6,r.sendRawTransaction(i,{skipPreflight:!0});case 6:return l=e.sent,console.log("Started awaiting confirmation for",l),p=!1,(0,o.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p||!(v()-c<s)){e.next=6;break}return r.sendRawTransaction(i,{skipPreflight:!0}),e.next=4,K(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,T(l,s,r,"recent",!0);case 13:if(d=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!d.err){e.next=19;break}throw console.error(d.err),new Error("Transaction failed: Custom instruction error");case 19:u=(null===d||void 0===d?void 0:d.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return m=null,e.prev=28,e.next=31,S(r,n,"single");case 31:m=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!m||!m.err){e.next=47;break}if(!m.logs){e.next=46;break}x=m.logs.length-1;case 39:if(!(x>=0)){e.next=46;break}if(!(g=m.logs[x]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+g.slice("Program log: ".length));case 43:--x,e.next=39;break;case 46:throw new Error(JSON.stringify(m.err));case 47:return e.prev=47,p=!0,e.finish(47);case 50:return console.log("Latency",l,v()-c),e.abrupt("return",{txid:l,slot:u});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function S(e,t,n){return P.apply(this,arguments)}function P(){return(P=(0,o.Z)(f().mark((function e(t,n,r){var a,s,i,c,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),s=n._serialize(a),i=s.toString("base64"),c=[i,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",c);case 10:if(!(o=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+o.error.message);case 13:return e.abrupt("return",o.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,n){return j.apply(this,arguments)}function j(){return(j=(0,o.Z)(f().mark((function e(t,n,r){var a,s,i,c,u,l=arguments;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]?l[3]:"recent",s=l.length>4&&void 0!==l[4]&&l[4],i=!1,c={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=(0,o.Z)(f().mark((function e(l,p){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){i||(i=!0,console.log("Rejecting for timeout..."),p({timeout:!0}))}),n);try{u=r.onSignature(t,(function(e,t){i=!0,c={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),p(c)):(console.log("Resolved via websocket",e),l(c))}),a)}catch(d){i=!0,console.error("WS error in setup",t,d)}case 2:if(i||!s){e.next=8;break}return(0,o.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,c=n&&n.value[0],i||(c?c.err?(console.log("REST error for",t,c),i=!0,p(c.err)):c.confirmations?(console.log("REST confirmation for",t,c),i=!0,l(c)):console.log("REST no confirmations for",t,c):console.log("REST null result for",t,c)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,K(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return c=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),i=!0,console.log("Returning status",c),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=function(e){return new Promise((function(t){return setTimeout(t,e)}))},R=new p.rV.Connection("https://dawn-broken-fire.solana-mainnet.quiknode.pro/27e463261539336398b0bae70f77ef0e3b7a4ddd/");function N(e,t){return A.apply(this,arguments)}function A(){return(A=(0,o.Z)(f().mark((function e(t,n){var r,a,s,i,c,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.vK.getProgramAccounts(R,{filters:[{memcmp:{offset:326,bytes:t}}]});case 2:r=e.sent,a=[],s=0;case 5:if(!(s<r.length)){e.next=15;break}return i=r[s],e.next=9,R.getParsedAccountInfo(i.pubkey);case 9:c=e.sent,o=new d.SF(t.toString(),c.value),n?a.push(o.data):a.push(o.data.mint);case 12:s++,e.next=5;break;case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=n(8764).Buffer,_=new p.rV.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),M=new p.rV.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),Z=new p.rV.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),O=function(){var e=(0,o.Z)(f().mark((function e(t,n,r){var a,s,i,c,u,l=arguments;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]?l[3]:"recent",s=l.length>4&&void 0!==l[4]&&l[4],i=!1,c={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=(0,o.Z)(f().mark((function e(l,p){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){i||(i=!0,console.log("Rejecting for timeout..."),p({timeout:!0}))}),n);try{u=r.onSignature(t,(function(e,t){i=!0,c={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),p(c)):(console.log("Resolved via websocket",e),l(c))}),a)}catch(d){i=!0,console.error("WS error in setup",t,d)}case 2:if(i||!s){e.next=8;break}return(0,o.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,c=n&&n.value[0],i||(c?c.err?(console.log("REST error for",t,c),i=!0,p(c.err)):c.confirmations?(console.log("REST confirmation for",t,c),i=!0,l(c)):console.log("REST no confirmations for",t,c):console.log("REST null result for",t,c)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,K(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return c=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),i=!0,console.log("Returning status",c),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),V=function(e,t,n,r){var a=[{pubkey:t,isSigner:!0,isWritable:!0},{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:p.rV.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:m.H_,isSigner:!1,isWritable:!1},{pubkey:p.rV.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new p.rV.TransactionInstruction({keys:a,programId:M,data:E.from([])})},L=function(){var e=(0,o.Z)(f().mark((function e(t,n,r){var a,s,i,c,o,u,l,d,m;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new p.zt(r,t,{preflightCommitment:"recent"}),e.next=3,p.$r.fetchIdl(_,a);case 3:if(!(s=e.sent)){e.next=18;break}return i=new p.$r(s,_,a),c={id:n,connection:r,program:i},e.next=9,i.account.candyMachine.fetch(n);case 9:return o=e.sent,u=o.data.itemsAvailable.toNumber(),l=o.itemsRedeemed.toNumber(),d=u-l,m=o.data.goLiveDate.toNumber(),m=new Date(1e3*m),e.abrupt("return",{candyMachine:c,itemsAvailable:u,itemsRedeemed:l,itemsRemaining:d,goLiveDate:m});case 18:throw new Error("Fetching idl returned null: check CANDY_MACHINE_PROGRAM");case 19:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),C=function(){var e=(0,o.Z)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.rV.PublicKey.findProgramAddress([E.from("metadata"),Z.toBuffer(),t.toBuffer(),E.from("edition")],Z);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=(0,o.Z)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.rV.PublicKey.findProgramAddress([E.from("metadata"),Z.toBuffer(),t.toBuffer()],Z);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=(0,o.Z)(f().mark((function e(t,n){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.rV.PublicKey.findProgramAddress([t.toBuffer(),m.H_.toBuffer(),n.toBuffer()],M);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function D(e,t){return I.apply(this,arguments)}function I(){return(I=(0,o.Z)(f().mark((function e(t,n){var r,s,i,c,o,u,l,x,g,b,h,v;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("GdoFojCVEwyfLDZh39o7AjP15RMWhZAFHi4KmByMV3bL");case 2:return r=e.sent,s=[],e.next=6,t.getParsedTokenAccountsByOwner(n,{programId:m.H_});case 6:i=e.sent,c=0;case 8:if(!(c<i.value.length)){e.next=33;break}if(o=i.value[c],"1"!=(u=o.account.data.parsed.info.tokenAmount).amount||"0"!=u.decimals||!r.includes(o.account.data.parsed.info.mint)){e.next=30;break}return e.next=14,p.rV.PublicKey.findProgramAddress([E.from("metadata"),Z.toBuffer(),new p.rV.PublicKey(o.account.data.parsed.info.mint).toBuffer()],Z);case 14:return l=e.sent,x=(0,a.Z)(l,1),g=x[0],e.next=19,t.getParsedAccountInfo(g);case 19:return b=e.sent,h=new d.SF(n.toString(),b.value),e.next=23,fetch(h.data.data.uri);case 23:if(200!==(v=e.sent).status){e.next=30;break}return e.t0=s,e.next=28,v.json();case 28:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 30:c++,e.next=8;break;case 33:return e.abrupt("return",s);case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(){var e=(0,o.Z)(f().mark((function e(t,n,r,a){var s,i,c,o,u,l,d;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=p.rV.Keypair.generate(),e.next=3,F(r,s.publicKey);case 3:return i=e.sent,c=t.connection,o=t.program,e.next=7,B(s.publicKey);case 7:return u=e.sent,e.next=10,C(s.publicKey);case 10:return l=e.sent,e.next=13,c.getMinimumBalanceForRentExemption(m.qT.span);case 13:return d=e.sent,e.next=16,o.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:u,masterEdition:l,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:Z,tokenProgram:m.H_,systemProgram:p.rV.SystemProgram.programId,rent:p.rV.SYSVAR_RENT_PUBKEY,clock:p.rV.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[p.rV.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:m.qT.span,lamports:d,programId:m.H_}),m.WU.createInitMintInstruction(m.H_,s.publicKey,0,r,r),V(i,r,r,s.publicKey),m.WU.createMintToInstruction(m.H_,s.publicKey,i,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),q=function(){var e=(0,o.Z)(f().mark((function e(t,n,r,a){var s,i,c,o,u,l,d,x,g,b,v,y,k=arguments;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=k.length>4&&void 0!==k[4]?k[4]:2,i=[],c=[],o=0;case 4:if(!(o<s)){e.next=31;break}return u=p.rV.Keypair.generate(),e.next=8,F(r,u.publicKey);case 8:return l=e.sent,d=t.connection,e.next=12,d.getMinimumBalanceForRentExemption(m.qT.span);case 12:return x=e.sent,g=[p.rV.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:u.publicKey,space:m.qT.span,lamports:x,programId:m.H_}),m.WU.createInitMintInstruction(m.H_,u.publicKey,0,r,r),V(l,r,r,u.publicKey),m.WU.createMintToInstruction(m.H_,u.publicKey,l,r,[],1)],e.next=16,C(u.publicKey);case 16:return b=e.sent,e.next=19,B(u.publicKey);case 19:return v=e.sent,e.t0=g,e.next=23,t.program.instruction.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:u.publicKey,metadata:v,masterEdition:b,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:Z,tokenProgram:m.H_,systemProgram:p.rV.SystemProgram.programId,rent:p.rV.SYSVAR_RENT_PUBKEY,clock:p.rV.SYSVAR_CLOCK_PUBKEY}});case 23:e.t1=e.sent,e.t0.push.call(e.t0,e.t1),y=[u],i.push(y),c.push(g);case 28:o++,e.next=4;break;case 31:return e.next=33,h(t.program.provider.connection,t.program.provider.wallet,c,i);case 33:return e.abrupt("return",e.sent);case 34:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),H=n(8279),U=n(7627),Y=n(7730),G=new p.rV.PublicKey("DrsiVHdmGRafmgrFxLe4n3inQtkS4Pf2vLhsS3kan9Ud"),z=new p.rV.PublicKey("2wtCZL3eQaJoJQ9Q1hkKzDMqJ1jAYq6NCetkphxrZvq7"),J=new p.rV.PublicKey("GdoFojCVEwyfLDZh39o7AjP15RMWhZAFHi4KmByMV3bL"),Q=new p.rV.Connection("https://dawn-broken-fire.solana-mainnet.quiknode.pro/27e463261539336398b0bae70f77ef0e3b7a4ddd/");var X=n(8130),$=new p.rV.Connection("https://dawn-broken-fire.solana-mainnet.quiknode.pro/27e463261539336398b0bae70f77ef0e3b7a4ddd/"),ee=function(){var e=(0,U.Os)(),t=(0,i.useState)(!1),n=t[0],r=t[1],a=(0,i.useState)([]),s=a[0],c=a[1];return(0,i.useEffect)((function(){(0,o.Z)(f().mark((function t(){var n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&e.publicKey&&e.signAllTransactions&&e.signTransaction){t.next=2;break}return t.abrupt("return");case 2:return r(!0),t.next=5,D($,e.publicKey);case 5:n=t.sent,c(n),r(!1);case 8:case"end":return t.stop()}}),t)})))()}),[e]),[n,s]},te=n(5893);function ne(e){var t=e.nft;return(0,i.useEffect)((function(){console.log(t)}),[]),(0,te.jsxs)("div",{className:"flex flex-col w-1/4 p-3 border-2 border-black",children:[(0,te.jsx)("img",{src:t.image,alt:t.description||t.name}),(0,te.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,te.jsx)("p",{children:t.name}),(0,te.jsx)("p",{className:"font-bold",children:t.symbol})]})]})}n(2243);function re(){var e=(0,Y.Z)(),t=(0,a.Z)(e,1)[0],n=function(){var e,t=(0,Y.Z)(),n=(0,a.Z)(t,2)[1],r=(0,i.useState)(),s=r[0],c=r[1],l=(0,U.Os)(),p=(0,i.useState)((e={itemsRemaining:0,itemsRedeemed:0,itemsAvailable:0},(0,u.Z)(e),e)),d=p[0],m=p[1],x=(0,i.useState)(!1),b=x[0],h=x[1],v=(0,i.useState)(!1),y=v[0],k=v[1],w=(0,i.useState)(new Date(parseInt("1639384800",10))),S=w[0],P=w[1];return(0,i.useEffect)((function(){(0,o.Z)(f().mark((function e(){var t,n,r,a,s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l&&l.publicKey&&l.signAllTransactions&&l.signTransaction){e.next=2;break}return e.abrupt("return");case 2:return t={publicKey:l.publicKey,signAllTransactions:l.signAllTransactions,signTransaction:l.signTransaction},e.next=5,L(t,J,Q);case 5:n=e.sent,r=n.candyMachine,a=n.goLiveDate,s=n.itemsRemaining,k(0===s),P(a),c(r);case 12:case"end":return e.stop()}}),e)})))()}),[l,J,Q]),(0,i.useEffect)((function(){(0,o.Z)(f().mark((function e(){var t,n,r,a,s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=9;break}return t={publicKey:l.publicKey,signAllTransactions:l.signAllTransactions,signTransaction:l.signTransaction},e.next=4,L(t,J,Q);case 4:n=e.sent,r=n.itemsRemaining,a=n.itemsRedeemed,s=n.itemsAvailable,m({itemsRemaining:r,itemsRedeemed:a,itemsAvailable:s});case 9:case"end":return e.stop()}}),e)})))()}),[l,J,Q,b]),{isSoldOut:y,mintStartDate:S,isMinting:b,nftsData:d,startMint:function(){var e=(0,o.Z)(f().mark((function e(){var t,r,a,i;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,h(!0),!(l.connected&&null!==s&&void 0!==s&&s.program&&l.publicKey)){e.next=10;break}return e.next=5,W(s,z,l.publicKey,G);case 5:return t=e.sent,e.next=8,O(t,3e4,Q,"singleGossip",!1);case 8:null!==(r=e.sent)&&void 0!==r&&r.err?H.ZP.error("Mint failed! Please try again!"):H.ZP.success("Congratulations! Mint succeeded! Check your wallet :)");case 10:e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),a=e.t0.message||"Minting failed! Please try again!",e.t0.message?311===e.t0.code?(a="SOLD OUT!",k(!0)):312===e.t0.code&&(a="Minting period hasn't started yet."):e.t0.message.indexOf("0x138")||(e.t0.message.indexOf("0x137")?a="SOLD OUT!":e.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),H.ZP.error(a);case 17:if(e.prev=17,null===l||void 0===l||!l.publicKey){e.next=23;break}return e.next=21,Q.getBalance(null===l||void 0===l?void 0:l.publicKey);case 21:i=e.sent,n(i/g.LAMPORTS_PER_SOL);case 23:return h(!1),e.finish(17);case 25:case"end":return e.stop()}}),e,null,[[0,12,17,25]])})));return function(){return e.apply(this,arguments)}}(),startMintMultiple:function(){var e=(0,o.Z)(f().mark((function e(t){var r,a,i,c,o,u,p,d,m,x,b,v,y,w;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,h(!0),!(l.connected&&null!==s&&void 0!==s&&s.program&&l.publicKey)){e.next=37;break}return e.next=5,Q.getBalance(null===l||void 0===l?void 0:l.publicKey);case 5:return e.t0=e.sent,e.t1=g.LAMPORTS_PER_SOL,r=e.t0/e.t1,a=r-1*t,e.next=11,q(s,z,l.publicKey,G,t);case 11:for(i=e.sent,c=[],o=0;o<i.length;o++)u=i[o],c.push(O(u,3e4,Q,"singleGossip",!0));return e.next=16,Promise.all(c);case 16:for(p=e.sent,d=0,m=0,x=0;x<p.length;x++)null!==(b=p[x])&&void 0!==b&&b.err?m+=1:d+=1;return e.next=22,Q.getBalance(null===l||void 0===l?void 0:l.publicKey);case 22:e.t2=e.sent,e.t3=g.LAMPORTS_PER_SOL,v=e.t2/e.t3;case 25:if(!(v>a)){e.next=35;break}return e.next=28,K(1e3);case 28:return e.next=30,Q.getBalance(null===l||void 0===l?void 0:l.publicKey);case 30:e.t4=e.sent,e.t5=g.LAMPORTS_PER_SOL,v=e.t4/e.t5,e.next=25;break;case 35:d&&H.ZP.success("Congratulations! ".concat(d," mints succeeded! Your NFT's should appear in your wallet soon :)"),{duration:6e3,position:"bottom-center"}),m&&H.ZP.error("Some mints failed! ".concat(m," mints failed! Check your wallet :("),{duration:6e3,position:"bottom-center"});case 37:e.next=44;break;case 39:e.prev=39,e.t6=e.catch(0),y=e.t6.message||"Minting failed! Please try again!",e.t6.message?311===e.t6.code?(y="SOLD OUT!",k(!0)):312===e.t6.code&&(y="Minting period hasn't started yet."):e.t6.message.indexOf("0x138")||(e.t6.message.indexOf("0x137")?y="SOLD OUT!":e.t6.message.indexOf("0x135")&&(y="Insufficient funds to mint. Please fund your wallet.")),H.ZP.error(y);case 44:if(e.prev=44,null===l||void 0===l||!l.publicKey){e.next=50;break}return e.next=48,Q.getBalance(null===l||void 0===l?void 0:l.publicKey);case 48:w=e.sent,n(w/g.LAMPORTS_PER_SOL);case 50:return h(!1),e.finish(44);case 52:case"end":return e.stop()}}),e,null,[[0,39,44,52]])})));return function(t){return e.apply(this,arguments)}}()}}(),r=n.isSoldOut,l=n.mintStartDate,p=n.isMinting,d=n.startMint,m=n.startMintMultiple,x=n.nftsData,b=ee(),h=(0,a.Z)(b,2),v=(h[0],h[1]),y=(0,U.Os)().connected,k=(0,i.useState)(!1),w=(k[0],k[1]);(0,i.useEffect)((function(){new Date(l).getTime()<Date.now()&&w(!0)}),[]);var S=function(){var e=(0,i.useState)(5),t=e[0],n=e[1];return(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("button",{onClick:function(){return m(t)},disabled:p,className:"px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600",children:p?"loading":"mint ".concat(t)}),(0,te.jsx)("input",{disabled:p,type:"number",min:2,max:10,className:"font-bold text-white bg-gray-500  ml-5 p-1 text-center",value:t,onChange:function(e){return n(e.target.value)}}),(0,te.jsx)("p",{className:"mx-auto mt-2"})]})};return(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)(s.default,{children:(0,te.jsx)("div",{className:"row",children:(0,te.jsxs)("div",{className:"col-4",children:[(0,te.jsx)("title",{className:"Title",style:{justifyContent:"center"},children:"The Panthera Club Free Mint live! "}),(0,te.jsx)("meta",{name:"This is the official site for you to mint",content:"5555 Panthera NFTs that are free to mint"}),(0,te.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})})}),(0,te.jsx)("div",{className:"row",children:(0,te.jsx)("div",{className:"col-11",children:(0,te.jsxs)("div",{className:"topSection items-center justify-between w-full mt-5",children:[(0,te.jsx)("h1",{className:"text-2xl font-bold ml-5",children:"The Panthera Club Mint live "}),(0,te.jsxs)("div",{className:"topSection items-center",children:[y&&(0,te.jsxs)("div",{className:"flex items-end mr-2",children:[(0,te.jsx)("p",{className:"text-xs text-gray-400",children:"balance"}),(0,te.jsx)("p",{className:"mx-1 font-bold leading-none",children:t.toFixed(2)}),(0,te.jsx)("p",{className:"font-bold leading-none text-transparent bg-clip-text",style:{backgroundImage:"linear-gradient(to bottom right, #00FFA3, #03E1FF, #DC1FFF)"},children:"SOL"})]}),(0,te.jsx)(c.aD,{})]})]})})}),(0,te.jsx)("div",{className:"row",children:y&&(0,te.jsxs)("p",{className:"text-center mt-5",children:[(0,te.jsx)("span",{className:"font-bold ml-5",children:"Available/Minted/Total:"})," ",x.itemsRemaining,"/",x.itemsRedeemed,"/",x.itemsAvailable]})}),(0,te.jsx)("div",{className:"row",children:(0,te.jsx)("div",{className:"col-md-10 col-12 margin-div",children:(0,te.jsx)("div",{className:"d-flex",children:y?(0,te.jsx)(te.Fragment,{children:new Date(l).getTime()<Date.now()?(0,te.jsx)(te.Fragment,{children:r?(0,te.jsx)("p",{children:"SOLD OUT"}):(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("div",{className:"row",children:(0,te.jsxs)("div",{className:"ml-5",children:[(0,te.jsx)("h1",{className:"text-3xl font-bold",children:"Mint One"}),(0,te.jsx)("button",{onClick:d,disabled:p,className:"px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 mt-2",children:p?"loading":"mint 1"})]})}),(0,te.jsxs)("div",{className:"margin-left",children:[(0,te.jsxs)("h1",{className:"mb-3 text-3xl font-bold",children:["Mint Many ",(0,te.jsx)("span",{children:" (min 2; max 10;)"})]}),(0,te.jsx)(S,{})]})]})}):(0,te.jsx)(X.ZP,{date:l,onMount:function(e){return e.completed&&w(!0)},onComplete:function(){return w(!0)}})}):(0,te.jsx)("p",{className:"connect-wall-text",children:(0,te.jsx)("b",{children:"Connect wallet to mint"})})})})}),(0,te.jsxs)("div",{className:"flex flex-col items-center min-h-screen mx-6",children:[(0,te.jsx)(H.x7,{}),(0,te.jsx)("div",{className:"image",children:(0,te.jsx)("img",{src:"https://thepanthera.club/wp-content/uploads/2021/12/cover-assrt-1.png",alt:""})}),(0,te.jsxs)("div",{className:"flex flex-col w-full",children:[(0,te.jsx)("h2",{className:"text-2xl font-bold",children:"My NFTs"}),(0,te.jsx)("div",{className:"flex mt-3 gap-x-2",children:v.map((function(e,t){return(0,te.jsx)(ne,{nft:e},t)}))})]})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6483)}])}},function(e){e.O(0,[774,3,870,526,123,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);