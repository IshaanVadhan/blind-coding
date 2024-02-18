const handleLogin = () => {
        if (!currentUser?.email) {
            auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                // console.log('Logged in with:', user);
                firestore.collection("users")
                .where("email", "==", user?.email)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        if (doc.data()?.userType === userType) {
                            setCurrentUser(doc.data());
                        }
                        else {
                            alert(`You are not registered as ${userType}`)
                        }
                    })
                })
                .catch((error) => {
                    alert(error);
                });
            })
            .catch(error => alert(error.message))
        }
    }


